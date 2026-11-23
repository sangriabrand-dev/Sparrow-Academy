/**
 * SPARROW CREATIVE ACADEMY — Approved Courses Data
 * Note: Strictly NO prices or fee information per client guidelines.
 * All statistics and placement figures removed to preserve factual integrity.
 * Features the official courses approved for Sparrow Creative Academy.
 */

export const COURSES_DATA = [
  {
    id: 1,
    slug: "ai-powered-graphic-design-and-creative-design",
    legacySlugs: ["generative-art-and-design", "brand-identity-design"],
    badge: "Core Program",
    category: "Design",
    title: "AI-Powered Graphic Design & Creative Design",
    desc: "Master prompt engineering, generative design tools, and brand systems to produce commercial visual assets, typography, and advertising concepts.",
    level: "Beginner → Advanced",
    duration: "24 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "🎨",
    image: "/course-images/01_graphic-design.png",
    tools: ["Midjourney", "Adobe Firefly", "Photoshop", "Illustrator"],
    overview: "Deep dive into Midjourney v6, Adobe Firefly, Stable Diffusion, and vector workflows for professional visual communication, corporate branding, and concept art.",
    whoIsItFor: "Graphic designers, visual artists, art directors, marketers, and creative brand specialists.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Prompt engineering & style transfer in Midjourney & Adobe Firefly",
      "Commercial vector workflows & typography pairing hierarchies",
      "Brand identity systems, color accessibility & design tokens",
      "High-resolution print and web asset mastering with AI upscaling"
    ],
    syllabus: [
      {
        module: "Module 1: Midjourney Architecture & Master Parameters",
        topics: [
          "Stylize, chaos, and character weight parameters (--s, --c, --cw)",
          "Image weighting (--iw) and multi-prompt blend architectures",
          "Permutation prompts for high-speed concept exploration"
        ]
      },
      {
        module: "Module 2: Inpainting, Outpainting & Regional Control",
        topics: [
          "Vary (Region) and prompt editing for micro-adjustments",
          "Pan and zoom-out canvas expansion techniques",
          "Replacing backgrounds and commercial product isolation"
        ]
      },
      {
        module: "Module 3: Commercial Vector & Brand Asset Generation",
        topics: [
          "Adobe Firefly generative fill and vector text effects",
          "Vector conversion and Illustrator asset preparation",
          "Typography pairings, contrast tokens, and brand identity manuals"
        ]
      },
      {
        module: "Module 4: High-Resolution Print & Web Delivery",
        topics: [
          "AI upscaling pipelines (Topaz Gigapixel, Magnific AI)",
          "Color profile management (RGB vs CMYK for production)",
          "Client-ready visual identity package delivery"
        ]
      }
    ]
  },
  {
    id: 2,
    slug: "video-editing-and-ai-powered-post-production",
    legacySlugs: ["video-production-with-ai"],
    badge: "Popular",
    category: "Video",
    title: "Video Editing & AI-Powered Post-Production",
    desc: "Transform video editing workflows using AI cut detection, automated color matching, neural audio clean-up, and timeline acceleration.",
    level: "Intermediate",
    duration: "22 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "🎬",
    image: "/course-images/02_video-editing.png",
    tools: ["Premiere Pro", "DaVinci Resolve", "Topaz Video AI", "Audition"],
    overview: "Learn industry-standard post-production workflows integrating Premiere Pro, DaVinci Resolve, and generative AI tools for high-impact commercial video editing.",
    whoIsItFor: "Video editors, YouTube creators, documentary filmmakers, and commercial agency editors.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Smart timeline pacing, ripple edits & multi-cam synchronization",
      "AI transcription, text-based editing & automated dynamic captions",
      "Neural audio restoration, voice leveling & sound design",
      "DaVinci Resolve color grading, look matching & LUT workflows"
    ],
    syllabus: [
      {
        module: "Module 1: Modern Non-Linear Editing & AI Timelines",
        topics: [
          "Editorial rhythm, pace, and story-driven continuity cutting",
          "Text-based editing workflows and automated transcript synchronization",
          "Scene cut detection and automated rough-cut generation"
        ]
      },
      {
        module: "Module 2: Neural Audio Engineering & Sound Design",
        topics: [
          "AI noise reduction, dialogue isolation, and room echo removal",
          "Voice leveling, EQ sculpting, and dynamics compression",
          "Sound effect layering, ambient pads, and beat-matched cuts"
        ]
      },
      {
        module: "Module 3: Color Grading & Look Consistency",
        topics: [
          "Color science fundamentals: Log profiles, RAW footage, and Rec.709",
          "DaVinci Resolve node structures and AI-assisted shot matching",
          "Custom LUT generation and mood grade creation"
        ]
      },
      {
        module: "Module 4: Studio Finishing & Multi-Platform Delivery",
        topics: [
          "Mastering for 16:9 widescreen, 9:16 reels, and OTT formats",
          "Export codecs, bitrate optimization, and HDR delivery standards",
          "Showreel compilation and client handover presentations"
        ]
      }
    ]
  },
  {
    id: 4,
    slug: "ai-motion-graphics-and-animation",
    legacySlugs: ["ai-powered-motion-design"],
    badge: "Core Program",
    category: "Animation",
    title: "AI Motion Graphics & Animation",
    desc: "Create dynamic motion graphics, title sequences, and kinetic typography using After Effects enhanced by AI motion extensions.",
    level: "Beginner → Advanced",
    duration: "24 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "✨",
    image: "/course-images/course4_motion-graphics.png",
    tools: ["After Effects", "Cinema 4D", "Animate", "Lottie"],
    overview: "Combine traditional 2D animation principles with AI generative depth, rotoscoping, speed-ramp synthesis, and broadcast motion toolkits.",
    whoIsItFor: "Motion designers, 2D animators, broadcast designers, and commercial video creators.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "After Effects AI plugins, rotobrush & depth map extraction",
      "Kinetic typography, logo reveals & brand motion idents",
      "Generative loop textures, visual effects & transitions",
      "Exporting broadcast and social-optimized delivery packages"
    ],
    syllabus: [
      {
        module: "Module 1: Principles of Animation & Motion Theory",
        topics: [
          "Timing, spacing, anticipation, and easing curves in After Effects",
          "Graph editor mastery for organic motion dynamics",
          "Kinetic typography and brand motion languages"
        ]
      },
      {
        module: "Module 2: AI-Assisted Rotoscoping & Depth Passes",
        topics: [
          "Roto Brush 3.0 and neural matte extraction",
          "Depth map estimation for 3D camera projection",
          "Generative texture looping and procedural backgrounds"
        ]
      },
      {
        module: "Module 3: Logo Reveals & Broadcast Design Packages",
        topics: [
          "Vector morphing, particle accents, and energy strokes",
          "Lower thirds, title cards, and broadcast transition suites",
          "Expressions and modular motion templates (MOGRTs)"
        ]
      },
      {
        module: "Module 4: Portfolio Reel & Studio Delivery",
        topics: [
          "Crafting an attention-grabbing 60-second motion reel",
          "Alpha channel rendering and transparent web video (WebM / Lottie)",
          "Commercial motion graphic portfolio review"
        ]
      }
    ]
  },
  {
    id: 5,
    slug: "ai-3d-modeling-animation-and-visualization",
    legacySlugs: ["3d-character-animation"],
    badge: "Comprehensive",
    category: "3D Animation",
    title: "AI 3D Modeling, Animation & Visualization",
    desc: "Generate 3D models, textures, automated rigs, and architectural/product visualizations using Blender, Unreal Engine, and AI 3D pipelines.",
    level: "Intermediate → Advanced",
    duration: "30 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "👾",
    image: "/course-images/course5_3d-modeling.png",
    tools: ["Blender", "Unreal Engine 5", "Substance 3D", "ZBrush"],
    overview: "Accelerate 3D creation with AI mesh synthesis, markerless mocap retargeting, procedural shading, and photorealistic real-time lighting.",
    whoIsItFor: "3D modelers, game artists, architects, industrial designers, and visualizers.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "2D concept to 3D mesh synthesis & AI retopology workflows",
      "Automated character rigging and markerless motion capture",
      "PBR texturing, procedural materials & AI upscaling",
      "Real-time lighting & rendering in Blender Cycles & Unreal Engine 5"
    ],
    syllabus: [
      {
        module: "Module 1: 3D Concept to Mesh Synthesis",
        topics: [
          "Generating 3D models from multi-view 2D images and prompts",
          "Topology cleanup, retopology workflows, and edge loops",
          "UV unwrapping and automated material generation"
        ]
      },
      {
        module: "Module 2: AI Rigging & Weight Mapping",
        topics: [
          "Automated skeleton detection and bone placement",
          "Weight painting optimization for natural deformations",
          "Facial blendshape generation and expressive rigs"
        ]
      },
      {
        module: "Module 3: Markerless AI Motion Capture",
        topics: [
          "Video-to-mocap extraction using standard camera footage",
          "Retargeting motion data to custom character skeletons",
          "Animation layer polishing and root motion management"
        ]
      },
      {
        module: "Module 4: Real-Time Lighting, Shading & Visualization",
        topics: [
          "Blender Cycles & Unreal Engine 5 Lumen setup",
          "Product visualization and architectural lighting setups",
          "Exporting high-fidelity 3D cinematic sequences"
        ]
      }
    ]
  },
  {
    id: 6,
    slug: "visual-effects-vfx-compositing-and-ai-workflows",
    legacySlugs: [],
    badge: "Industry Track",
    category: "VFX",
    title: "Visual Effects (VFX), Compositing & AI Workflows",
    desc: "Master high-end visual effects compositing, clean plate generation, matchmoving, green screen extraction, and generative CGI integration.",
    level: "Intermediate → Advanced",
    duration: "28 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "🔮",
    image: "/course-images/course6_vfx-compositing.png",
    tools: ["Nuke", "After Effects", "Mocha Pro", "Silhouette"],
    overview: "Learn node-based and layer-based compositing combining industry tools with cutting-edge AI inpainting, planar tracking, and atmospheric effects.",
    whoIsItFor: "VFX artists, compositors, film production technicians, and CGI creators.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Multi-layer compositing, color space & ACES color pipelines",
      "AI clean plate generation & automated wire/marker removal",
      "Camera tracking, 3D point cloud solving & element integration",
      "Atmospheric FX, CG lighting matching & photorealistic finishing"
    ],
    syllabus: [
      {
        module: "Module 1: Compositing Foundations & Color Science",
        topics: [
          "Node-based compositing architectures and alpha channel math",
          "ACES color management and linear workflow best practices",
          "Multi-pass EXR breakdown: diffuse, specular, depth, and emission"
        ]
      },
      {
        module: "Module 2: Neural Clean Plates & Rotoscoping",
        topics: [
          "AI inpainting for complex rig and wire removals",
          "Green/blue screen chroma keying with edge despill and hair detail retention",
          "Planar and point camera tracking for perspective stabilization"
        ]
      },
      {
        module: "Module 3: 3D Matchmoving & CGI Asset Integration",
        topics: [
          "Camera solving and spatial ground plane alignment",
          "Matching live-action grain, lens distortion, and depth of field",
          "Integrating 3D rendered elements into live plate photography"
        ]
      },
      {
        module: "Module 4: Atmospheric FX & Final Master Shot Finishing",
        topics: [
          "Volumetric light rays, smoke, sparks, and atmospheric particle systems",
          "Color grading composite passes for photographic unity",
          "Commercial VFX shot breakdown presentation"
        ]
      }
    ]
  },
  {
    id: 7,
    slug: "artificial-intelligence-and-machine-learning",
    legacySlugs: [],
    badge: "Advanced Track",
    category: "AI & Tech",
    title: "Artificial Intelligence & Machine Learning",
    desc: "Build, fine-tune, and deploy machine learning models, neural networks, LLMs, and computer vision systems using Python and modern frameworks.",
    level: "Beginner → Advanced",
    duration: "36 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "🤖",
    image: "/course-images/course7_ai-machine-learning.png",
    tools: ["Python", "PyTorch", "HuggingFace", "scikit-learn"],
    overview: "Hands-on foundation and advanced training in Python, PyTorch, scikit-learn, LLM fine-tuning, RAG architectures, and model deployment.",
    whoIsItFor: "Software developers, engineers, data practitioners, and tech innovators.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Python for ML: NumPy, Pandas, scikit-learn fundamentals",
      "Deep learning architectures: CNNs, RNNs, and Transformers",
      "Large language models (LLMs), prompt engineering & RAG pipelines",
      "Model deployment with FastAPI, Docker & cloud endpoints"
    ],
    syllabus: [
      {
        module: "Module 1: Python for Data Science & Machine Learning",
        topics: [
          "NumPy vectorized operations and Pandas data manipulation",
          "Exploratory data analysis, feature engineering, and data cleaning",
          "Supervised and unsupervised learning with scikit-learn"
        ]
      },
      {
        module: "Module 2: Deep Learning & Neural Architectures",
        topics: [
          "PyTorch tensors, autograd, and training loops",
          "Convolutional Neural Networks (CNNs) for image recognition",
          "Recurrent networks and sequential data modeling"
        ]
      },
      {
        module: "Module 3: Transformers & Modern Generative AI",
        topics: [
          "Attention mechanisms and Transformer encoder-decoder models",
          "Fine-tuning open-source LLMs (Llama, Mistral) with LoRA/QLoRA",
          "Retrieval-Augmented Generation (RAG) with vector databases"
        ]
      },
      {
        module: "Module 4: Model Serving & Production MLOps",
        topics: [
          "Packaging models as REST APIs using FastAPI",
          "Containerization with Docker and deployment to cloud hosts",
          "Monitoring model drift, latency, and token throughput"
        ]
      }
    ]
  },
  {
    id: 8,
    slug: "cloud-computing-and-devops-engineering",
    legacySlugs: [],
    badge: "Engineering Track",
    category: "Cloud & DevOps",
    title: "Cloud Computing & DevOps Engineering",
    desc: "Design resilient cloud infrastructure and automated CI/CD deployment pipelines using AWS, Docker, Kubernetes, and Terraform.",
    level: "Intermediate",
    duration: "32 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "☁️",
    image: "/course-images/Cloud DevOps Workspace Dashboard.png",
    tools: ["AWS", "Docker", "Kubernetes", "Terraform"],
    overview: "Master enterprise cloud architecture, container orchestration, infrastructure-as-code, and security best practices.",
    whoIsItFor: "System administrators, DevOps engineers, backend developers, and cloud architects.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "AWS core services: EC2, S3, RDS, VPC & IAM governance",
      "Docker containerization & multi-stage image optimization",
      "Kubernetes cluster configuration, pods, services, and ingress",
      "Infrastructure as Code with Terraform & automated CI/CD pipelines"
    ],
    syllabus: [
      {
        module: "Module 1: AWS Architecture & Cloud Infrastructure",
        topics: [
          "Virtual Private Cloud (VPC) design, subnets, and routing tables",
          "Compute scaling with EC2, Auto-Scaling Groups, and Elastic Load Balancers",
          "IAM security policies, roles, and least-privilege governance"
        ]
      },
      {
        module: "Module 2: Containerization with Docker",
        topics: [
          "Container architecture, Dockerfiles, and multi-stage builds",
          "Docker Compose for multi-container microservice applications",
          "Volume persistence, network bridging, and image security scanning"
        ]
      },
      {
        module: "Module 3: Kubernetes Orchestration at Scale",
        topics: [
          "Kubernetes control plane, pods, deployments, and replica sets",
          "ConfigMaps, Secrets, persistent volumes, and cluster networking",
          "Ingress controllers, TLS termination, and rolling zero-downtime updates"
        ]
      },
      {
        module: "Module 4: CI/CD Automation & Infrastructure as Code",
        topics: [
          "Terraform state management, modules, and declarative infrastructure",
          "GitHub Actions automated build, test, and container deployment pipelines",
          "Observability: Prometheus metrics, Grafana dashboards, and log streaming"
        ]
      }
    ]
  },
  {
    id: 9,
    slug: "data-analytics",
    legacySlugs: [],
    badge: "High Demand",
    category: "Data",
    title: "Data Analytics",
    desc: "Turn complex data into strategic business insights using SQL, Excel, Python, Power BI, and interactive Tableau dashboards.",
    level: "Beginner → Intermediate",
    duration: "24 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "📊",
    image: "/course-images/a_detailed_realistic_tech_workspace_scene_for_d.png",
    tools: ["SQL", "Python", "Power BI", "Tableau"],
    overview: "Master end-to-end data pipelines: querying relational databases, exploratory data analysis, statistical modeling, and visual KPI storytelling.",
    whoIsItFor: "Aspiring data analysts, business intelligence specialists, product managers, and decision-makers.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Advanced SQL queries, window functions, CTEs & database joins",
      "Data cleaning & statistical analysis with Python (Pandas/Seaborn)",
      "Interactive dashboard design in Power BI & Tableau",
      "Business metrics, conversion funnels & executive presentations"
    ],
    syllabus: [
      {
        module: "Module 1: SQL for Business Intelligence & Warehousing",
        topics: [
          "Relational database design, schemas, and primary/foreign keys",
          "Complex aggregations, window functions (RANK, ROW_NUMBER, NTILE)",
          "Common Table Expressions (CTEs), subqueries, and performance indexing"
        ]
      },
      {
        module: "Module 2: Python for Exploratory Data Analysis",
        topics: [
          "Pandas dataframes: filtering, grouping, pivoting, and merging datasets",
          "Detecting missing values, outliers, and data normalization",
          "Statistical distributions, correlations, and hypothesis validation"
        ]
      },
      {
        module: "Module 3: Power BI & Tableau Interactive Dashboards",
        topics: [
          "Data modeling, star schemas, and DAX calculated measures",
          "Interactive dashboard visual design: drill-downs, tooltips, and slicers",
          "Publishing and scheduling automated data refresh cycles"
        ]
      },
      {
        module: "Module 4: Business KPI Storytelling & Stakeholder Reporting",
        topics: [
          "Conversion funnels, cohort retention curves, and revenue churn",
          "Visual storytelling principles and executive reporting decks",
          "End-to-end data capstone project presentation"
        ]
      }
    ]
  },
  {
    id: 10,
    slug: "quality-control-engineering",
    legacySlugs: [],
    badge: "Professional Track",
    category: "Engineering",
    title: "Quality Control Engineering",
    desc: "Master quality assurance methodologies, statistical process control, ISO standards, and automated test protocols for engineering excellence.",
    level: "Beginner → Advanced",
    duration: "28 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "⚙️",
    image: "/course-images/Quality Control Engineering Workspace.png",
    tools: ["Six Sigma", "SPC Tools", "Minitab", "ISO 9001"],
    overview: "Comprehensive training in QA/QC systems, root cause analysis, Six Sigma methodologies, measurement inspection, and compliance auditing.",
    whoIsItFor: "Quality engineers, manufacturing specialists, inspectors, and operations managers.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Quality Management Systems (QMS) & ISO 9001 compliance standards",
      "Statistical Process Control (SPC), control charts & process capability (Cp, Cpk)",
      "Root cause analysis: 5 Whys, Ishikawa diagrams, FMEA & 8D problem-solving",
      "Metrology, geometric dimensioning (GD&T) & non-destructive inspection"
    ],
    syllabus: [
      {
        module: "Module 1: Quality Management Systems & Standards",
        topics: [
          "ISO 9001:2015 frameworks, quality manual structures, and audit readiness",
          "Cost of Quality (CoQ): prevention, appraisal, internal and external failure",
          "Documentation control and standard operating procedure (SOP) authoring"
        ]
      },
      {
        module: "Module 2: Statistical Process Control & Six Sigma Tools",
        topics: [
          "Control chart selection and interpretation (X-bar, R, p, c charts)",
          "Process capability indices (Cp, Cpk, Pp, Ppk) and variation reduction",
          "DMAIC methodology and continuous improvement pipelines"
        ]
      },
      {
        module: "Module 3: Root Cause Analysis & Defect Prevention",
        topics: [
          "Failure Mode and Effects Analysis (Design FMEA and Process FMEA)",
          "Ishikawa cause-and-effect diagrams, Pareto 80/20 analysis, and 5 Whys",
          "8D corrective and preventive action (CAPA) reporting"
        ]
      },
      {
        module: "Module 4: Metrology, Inspection & Audit Verification",
        topics: [
          "Geometric Dimensioning and Tolerancing (GD&T) drawing interpretation",
          "Measurement System Analysis (Gage R&R) and calibration protocols",
          "Non-destructive testing (NDT) workflows and final acceptance auditing"
        ]
      }
    ]
  },
  {
    id: 11,
    slug: "digital-marketing-and-seo",
    legacySlugs: [],
    badge: "Growth Track",
    category: "Digital Marketing",
    title: "Digital Marketing & SEO",
    desc: "Learn digital marketing strategies, search engine optimization, social media marketing, content promotion, and online campaign management to build practical digital marketing skills.",
    level: "Beginner → Advanced",
    duration: "24 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "📈",
    image: "/course-images/digital-marketing-seo.png",
    tools: ["Digital Marketing", "SEO", "Social Media", "Content Marketing"],
    overview: "Comprehensive practical training in search engine optimization, performance advertising, content promotion, and social media campaign management.",
    whoIsItFor: "Marketers, entrepreneurs, content creators, business owners, and aspiring growth specialists.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Search engine optimization (SEO) techniques, search intent & on-page strategies",
      "Social media marketing, content planning & organic engagement strategies",
      "Online campaign management, audience targeting & paid ad fundamentals",
      "Web analytics, conversion tracking & performance reporting"
    ],
    syllabus: [
      {
        module: "Module 1: Search Engine Optimization & Search Intent",
        topics: [
          "Keyword research methodologies and competitor analysis",
          "On-page optimization: semantic HTML, title tags, and content structure",
          "Technical SEO auditing and crawl fundamentals"
        ]
      },
      {
        module: "Module 2: Social Media Marketing & Content Promotion",
        topics: [
          "Social platform algorithms and audience demographics",
          "Content calendars, storytelling, and engagement workflows",
          "Organic promotion techniques and community growth"
        ]
      },
      {
        module: "Module 3: Online Campaign Management & Advertising",
        topics: [
          "Ad campaign structure, budgeting, and ad creative formats",
          "Targeting options and audience retargeting principles",
          "Ad performance metrics and campaign testing"
        ]
      },
      {
        module: "Module 4: Analytics & Practical Campaign Review",
        topics: [
          "Web analytics fundamentals and traffic acquisition channels",
          "Conversion tracking and lead generation funnels",
          "Campaign review, reporting, and portfolio deliverable"
        ]
      }
    ]
  },
  {
    id: 12,
    slug: "photography-videography-and-drone-pilot-training",
    legacySlugs: [],
    badge: "Studio Program",
    category: "Photography & Videography",
    title: "Photography, Videography & Drone Pilot Training",
    desc: "Explore photography and videography techniques, camera operations, visual storytelling, video production, and introductory drone-based aerial content creation.",
    level: "Beginner → Advanced",
    duration: "24 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "📷",
    image: "/course-images/photography-videography-drone.png",
    tools: ["Photography", "Videography", "Camera", "Drone Training"],
    overview: "Hands-on studio and field training covering camera operation, studio lighting, cinematic videography, visual storytelling, and introductory aerial drone filming techniques.",
    whoIsItFor: "Photographers, videographers, visual content creators, filmmakers, and creative media enthusiasts.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Camera operations, manual exposure controls, lens selection & framing",
      "Studio and natural lighting setups, composition & visual storytelling",
      "Cinematic video production, camera movement & audio capture essentials",
      "Introductory drone flight fundamentals, safety protocols & aerial filming techniques"
    ],
    syllabus: [
      {
        module: "Module 1: Photography Fundamentals & Camera Controls",
        topics: [
          "Aperture, shutter speed, ISO, and manual exposure balance",
          "Composition theory, focal lengths, depth of field, and color temperature",
          "Studio portraiture and product photography techniques"
        ]
      },
      {
        module: "Module 2: Studio Lighting & Visual Storytelling",
        topics: [
          "Key, fill, and rim lighting setups with diffusers and reflectors",
          "Framing, subject positioning, and mood creation",
          "On-set audio capture essentials for video production"
        ]
      },
      {
        module: "Module 3: Videography & Production Techniques",
        topics: [
          "Frame rates, shutter angles, and cinematic camera movement",
          "Gimbal handling, panning, tracking shots, and b-roll capture",
          "Directing and framing dynamic creative video sequences"
        ]
      },
      {
        module: "Module 4: Introductory Drone Aerial Content Creation",
        topics: [
          "Drone hardware overview, pre-flight safety checks, and airspace awareness",
          "Basic flight controls, smooth maneuvering, and flight safety practices",
          "Aerial camera movements, reveal shots, and creative aerial compositions"
        ]
      }
    ]
  }
];

export const COURSE_CATEGORIES = [
  "All",
  "Design",
  "Video",
  "Animation",
  "3D Animation",
  "VFX",
  "AI & Tech",
  "Cloud & DevOps",
  "Data",
  "Engineering",
  "Digital Marketing",
  "Photography & Videography"
];

export default COURSES_DATA;
