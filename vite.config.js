import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Local development plugin:
 * Handles /api/contact.php in dev mode so the consultation form works seamlessly
 * even when a local PHP server is not installed or running.
 * Automatically appends enquiries to public/api/submissions.log.
 */
function devContactApiPlugin() {
  return {
    name: 'dev-contact-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.method === 'POST' && (req.url === '/api/contact.php' || req.url === '/api/contact')) {
          let body = ''
          req.on('data', chunk => {
            body += chunk
          })
          req.on('end', () => {
            res.setHeader('Content-Type', 'application/json')
            try {
              const data = JSON.parse(body || '{}')

              // 1. Silent success for honeypot bot trap
              if (data.website_hp && String(data.website_hp).trim() !== '') {
                res.statusCode = 200
                res.end(JSON.stringify({
                  success: true,
                  message: 'Thank you! Your consultation request has been received. Our admissions team will get in touch shortly.'
                }))
                return
              }

              // 2. Validate required fields
              const fullName = String(data.fullName || '').trim()
              const email = String(data.email || '').trim()
              const phone = String(data.phone || '').trim()
              const course = String(data.course || '').trim()
              const message = String(data.message || '').trim() || 'General course and admissions enquiry'

              if (!fullName || !email || !phone || !course) {
                res.statusCode = 400
                res.end(JSON.stringify({
                  success: false,
                  message: 'Please fill in all required fields.'
                }))
                return
              }

              // 3. Persist submission to public/api/submissions.log
              const logEntry = JSON.stringify({
                ts: new Date().toISOString(),
                ip: req.socket.remoteAddress || '127.0.0.1',
                fullName,
                email,
                phone,
                course,
                preferredTime: data.preferredTime || 'Flexible',
                message,
                env: 'local-dev-mock'
              }) + '\n'

              const logDir = path.resolve(__dirname, 'public/api')
              if (!fs.existsSync(logDir)) {
                fs.mkdirSync(logDir, { recursive: true })
              }
              fs.appendFileSync(path.join(logDir, 'submissions.log'), logEntry, 'utf8')

              // 4. Return success response
              res.statusCode = 200
              res.end(JSON.stringify({
                success: true,
                message: 'Thank you! Your consultation request has been received. Our admissions team will get in touch shortly.'
              }))
            } catch (err) {
              res.statusCode = 400
              res.end(JSON.stringify({
                success: false,
                message: 'Invalid request format.'
              }))
            }
          })
          return
        }
        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), devContactApiPlugin()],
  server: {
    proxy: {
      // If a real PHP server is running on 8000 for non-contact endpoints
      '/api/custom': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})
