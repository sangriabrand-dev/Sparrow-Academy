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
    desc: "Learn the fundamentals of graphic design, image editing, digital illustration, branding, print design, social media creatives and AI-assisted design.",
    level: "Beginner → Advanced",
    duration: "24 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "🎨",
    image: "/course-images/01_graphic-design.png",
    tools: ["Midjourney", "Adobe Firefly", "Photoshop", "Illustrator"],
    overview: "Turn creative ideas into impactful visual designs. Learn the fundamentals of graphic design, image editing, digital illustration, branding, print design, social media creatives and AI-assisted design.",
    whoIsItFor: "Graphic designers, visual artists, art directors, marketers, and creative brand specialists.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Design principles, colour theory and typography.",
      "Image editing, retouching and photo manipulation.",
      "Vector illustration, logo and brand identity design.",
      "Posters, brochures and publication layouts.",
      "Social media, website and digital advertising creatives."
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
    desc: "Learn to transform raw footage into engaging videos through editing, sound design, visual enhancement and AI-assisted post-production techniques.",
    level: "Intermediate",
    duration: "22 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "🎬",
    image: "/course-images/02_video-editing.png",
    tools: ["Premiere Pro", "DaVinci Resolve", "Topaz Video AI", "Audition"],
    overview: "Learn to transform raw footage into engaging videos through editing, sound design, visual enhancement and AI-assisted post-production techniques.",
    whoIsItFor: "Video editors, YouTube creators, documentary filmmakers, and commercial agency editors.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Video editing fundamentals, timelines and transitions.",
      "Advanced editing, multi-camera and green-screen techniques.",
      "Audio editing, voice-overs and sound design.",
      "Colour correction and grading.",
      "AI-assisted video enhancement, subtitles and content creation."
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
    desc: "Bring ideas to life through animated text, logos, illustrations and visual storytelling with 2D animation, motion graphics and AI-assisted animation.",
    level: "Beginner → Advanced",
    duration: "24 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "✨",
    image: "/course-images/course4_motion-graphics.png",
    tools: ["After Effects", "Cinema 4D", "Animate", "Lottie"],
    overview: "Bring ideas to life through animated text, logos, illustrations and visual storytelling. Develop skills in 2D animation, motion graphics, 3D motion concepts and AI-assisted animation.",
    whoIsItFor: "Motion designers, 2D animators, broadcast designers, and commercial video creators.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Animation principles, timing and movement.",
      "Text, logo and title animation.",
      "2D animation and character movement.",
      "Motion tracking and animated visual effects.",
      "3D motion graphics and AI-assisted animation."
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
    desc: "Learn to create three-dimensional objects, characters and environments. Explore modelling, materials, lighting, animation and realistic visual presentation.",
    level: "Intermediate → Advanced",
    duration: "30 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "👾",
    image: "/course-images/course5_3d-modeling.png",
    tools: ["Blender", "Unreal Engine 5", "Substance 3D", "ZBrush"],
    overview: "Learn to create three-dimensional objects, characters and environments. Explore modelling, materials, lighting, animation and realistic visual presentation through practical projects.",
    whoIsItFor: "3D modelers, game artists, architects, industrial designers, and visualizers.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "3D modelling fundamentals and object creation.",
      "Character, product and prop modelling.",
      "UV mapping, texturing and material creation.",
      "3D lighting, cameras and rendering.",
      "Character setup, animation and 3D visualization."
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
    desc: "Discover how visual effects bring cinematic scenes to life. Learn compositing, object isolation, motion tracking and AI-assisted visual enhancement techniques.",
    level: "Intermediate → Advanced",
    duration: "28 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "🔮",
    image: "/course-images/course6_vfx-compositing.png",
    tools: ["Nuke", "After Effects", "Mocha Pro", "Silhouette"],
    overview: "Discover how visual effects bring cinematic scenes to life. Learn to combine visual elements, isolate objects, track movement and create enhanced scenes using compositing and AI-assisted techniques.",
    whoIsItFor: "VFX artists, compositors, film production technicians, and CGI creators.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "VFX production fundamentals and shot planning.",
      "Rotoscoping, masking and object isolation.",
      "Motion tracking and screen replacement.",
      "Green-screen techniques and digital compositing.",
      "Visual effects, simulations and AI-assisted enhancement."
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
    desc: "Explore how intelligent systems learn from data. Build foundational programming, data preparation, machine learning and introductory deep learning skills through practical projects.",
    level: "Beginner → Advanced",
    duration: "36 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "🤖",
    image: "/course-images/course7_ai-machine-learning.png",
    tools: ["Python", "PyTorch", "HuggingFace", "scikit-learn"],
    overview: "Explore how intelligent systems learn from data and solve real-world problems. Build foundational programming, data preparation, machine learning and introductory deep learning skills through practical projects.",
    whoIsItFor: "Software developers, engineers, data practitioners, and tech innovators.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Artificial intelligence, machine learning and deep learning fundamentals.",
      "Programming and data handling.",
      "Data preparation, cleaning and analysis.",
      "Machine learning algorithms and model evaluation.",
      "Neural networks, computer vision and generative AI fundamentals."
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
    desc: "Understand how applications and services are hosted, managed and deployed using cloud infrastructure, server management and development-to-deployment workflows.",
    level: "Intermediate",
    duration: "32 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "☁️",
    image: "/course-images/Cloud DevOps Workspace Dashboard.png",
    tools: ["AWS", "Docker", "Kubernetes", "Terraform"],
    overview: "Understand how applications and services are hosted, managed and deployed using cloud infrastructure. Learn the fundamentals of cloud computing, server management and development-to-deployment workflows.",
    whoIsItFor: "System administrators, DevOps engineers, backend developers, and cloud architects.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Cloud computing concepts and service models.",
      "Cloud infrastructure and resource management.",
      "Cloud storage, virtual machines and servers.",
      "Linux fundamentals and networking basics.",
      "Version control, containerisation and deployment workflows."
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
    desc: "Learn how to organise, analyse and interpret data to uncover useful insights. Develop practical skills in data preparation, visualisation and business reporting.",
    level: "Beginner → Intermediate",
    duration: "24 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "📊",
    image: "/course-images/a_detailed_realistic_tech_workspace_scene_for_d.png",
    tools: ["SQL", "Python", "Power BI", "Tableau"],
    overview: "Learn how to organise, analyse and interpret data to uncover useful insights. Develop practical skills in data preparation, database fundamentals, visualisation and business reporting.",
    whoIsItFor: "Aspiring data analysts, business intelligence specialists, product managers, and decision-makers.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Data analytics fundamentals and datasets.",
      "Spreadsheet operations, formulas and data organisation.",
      "Database concepts and query fundamentals.",
      "Data cleaning, analysis and statistical basics.",
      "Charts, dashboards, KPIs and business reporting."
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
    desc: "Understand how quality is maintained in industrial and production environments. Develop practical skills in product inspection, measurement, documentation and reporting.",
    level: "Beginner → Advanced",
    duration: "28 hrs (Self-Paced + Live Labs)",
    mode: "Online Live Cohort & Offline Studio Mentorship (Bengaluru)",
    icon: "⚙️",
    image: "/course-images/Quality Control Engineering Workspace.png",
    tools: ["Six Sigma", "SPC Tools", "Minitab", "ISO 9001"],
    overview: "Understand how quality is maintained in industrial and production environments. Develop practical skills in product inspection, measurement, quality documentation and reporting.",
    whoIsItFor: "Quality engineers, manufacturing specialists, inspectors, and operations managers.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Quality control and quality assurance fundamentals.",
      "Product inspection and defect identification.",
      "Basic measuring instruments and measurement practices.",
      "Quality records, checklists and inspection reports.",
      "Documentation, record management and practical inspection exercises."
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
    overview: "Learn how businesses build their online presence, connect with audiences and promote products or services through digital channels. Explore content creation, search visibility, advertising and campaign reporting.",
    whoIsItFor: "Marketers, entrepreneurs, content creators, business owners, and aspiring growth specialists.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Digital marketing fundamentals.",
      "Social media page management and audience engagement.",
      "Content creation, captions and promotional designs.",
      "Search engine optimisation and keyword fundamentals.",
      "Digital advertising, campaign planning and performance reporting."
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
    overview: "Develop practical visual storytelling skills through photography, video recording, lighting, audio and introductory drone operations. Learn to capture and present creative visuals through hands-on exercises.",
    whoIsItFor: "Photographers, videographers, visual content creators, filmmakers, and creative media enthusiasts.",
    certificateInfo: "Verified Sparrow Creative Academy Certificate of Completion awarded upon portfolio submission.",
    whatYouLearn: [
      "Photography fundamentals, composition and framing.",
      "Camera handling, focus and exposure.",
      "Portrait, product and outdoor photography.",
      "Videography, lighting and audio recording.",
      "Photo and video editing, introductory drone operation and safety."
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


export default COURSES_DATA;
