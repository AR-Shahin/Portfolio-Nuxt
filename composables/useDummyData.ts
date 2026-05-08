export const useDummyData = () => {

    const PROJECTS = [
        {
            name: "Lilyra AI Platform",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            viewLink: "#",
            category: "AI & Automation",
            liveLink: "https://lilyra.com",
            description: "An AI-driven automation platform for F-commerce and customer support. It features real-time messaging, brand-aware LLM models, and automated order processing. Built to streamline business operations using cutting-edge AI technologies.",
            features: ["AI Chatbots", "Real-time Messaging", "Order Automation", "Brand-aware Models"],
            technologies: ["FastAPI", "LangChain", "OpenAI", "Nuxt.js", "Redis"],
            slug: "lilyra-ai-platform",
            is_front: true,
            order: 1,
            extra_images: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
            ]
        },
        {
            name: "AI Cover Letter Generator",
            image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=800",
            viewLink: "#",
            category: "Gen AI",
            liveLink: "https://lilyra.com/tools/cover-letter",
            description: "A specialized AI tool that generates professional, tailored cover letters based on user resumes and job descriptions. Leverages LLMs for high-quality, context-aware writing.",
            features: ["PDF Parsing", "Tailored Content Generation", "Multiple Templates"],
            technologies: ["FastAPI", "LangChain", "React", "OpenAI"],
            slug: "ai-cover-letter-generator",
            is_front: true,
            order: 2,
            extra_images: [
                "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=600"
            ]
        },
        {
            name: "FNS24 News Portal",
            image: "https://picsum.photos/seed/news/800/600",
            viewLink: "#",
            category: "Web App",
            liveLink: "https://www.fns24.com",
            description: "A high-frequency news publishing platform delivering real-time updates. Designed for high scalability and performance, handling thousands of concurrent users.",
            features: ["Real-time Updates", "Search Optimization", "Scalable Architecture", "Ad Management"],
            technologies: ["Laravel", "Vue.js", "MySQL", "Redis"],
            slug: "fns24-news-portal",
            is_front: true,
            order: 3,
            extra_images: [
                "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=600"
            ]
        },
        {
            name: "Disaster Alert for BD",
            image: "https://picsum.photos/seed/disaster/800/600",
            viewLink: "#",
            category: "Mobile & Social Impact",
            liveLink: "#",
            description: "A real-time emergency response system for Bangladesh. Features include location-based rescue requests, weather alerts, and automated emergency SMS notifications.",
            features: ["Location Tracking", "Automated SMS", "Real-time Alerts", "Emergency Contacts"],
            technologies: ["Flutter", "Firebase", "Node.js", "Google Maps API"],
            slug: "disaster-alert-bd",
            is_front: true,
            order: 4,
            extra_images: [
                "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1514868222533-f584e03070cd?auto=format&fit=crop&q=80&w=600"
            ]
        },
        {
            name: "RAG-Based LLM Chatbot",
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
            viewLink: "#",
            category: "AI & ML",
            liveLink: "#",
            description: "An intelligent chatbot system utilizing Retrieval-Augmented Generation (RAG). It scrapes web content and uses semantic search to provide accurate, context-rich answers based on specific data sources.",
            features: ["Web Scraping", "Semantic Search", "Vector Database", "Contextual Accuracy"],
            technologies: ["Python", "LangChain", "ChromaDB", "FastAPI"],
            slug: "rag-llm-chatbot",
            is_front: true,
            order: 5,
            extra_images: [
                "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
            ]
        },
        {
            name: "Breast Cancer Detection Research",
            image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
            viewLink: "#",
            category: "Research",
            liveLink: "https://www.mdpi.com/",
            description: "A deep learning-based research project for early detection of breast cancer. Achieved a 93% accuracy rate using CNN models. Published in a peer-reviewed MDPI journal.",
            features: ["Image Classification", "Deep Learning Models", "93% Accuracy", "Clinical Data Analysis"],
            technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
            slug: "breast-cancer-detection",
            is_front: true,
            order: 6,
            extra_images: [
                "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600"
            ]
        }
    ]

    const SKILLS = [
        {
            category: "AI & Machine Learning",
            items: ["LangChain", "RAG", "LLM Agents", "NLP", "Semantic Search", "OpenAI API", "TensorFlow", "PyTorch"]
        },
        {
            category: "Backend Development",
            items: ["Laravel", "FastAPI", "Django", "Node.js", "Express", "RESTful APIs", "Microservices"]
        },
        {
            category: "Frontend & UI",
            items: ["Nuxt.js", "Vue.js", "React.js", "Tailwind CSS", "Bootstrap", "Modern CSS/SCSS"]
        },
        {
            category: "Database & DevOps",
            items: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Docker", "AWS", "VPS", "CI/CD"]
        }
    ]

    const EXPERIENCE = [
        {
            company: "JB Connect Ltd.",
            role: "Intermediate Software Engineer",
            period: "Oct 2025 - Present",
            description: "Focusing on Backend development, AWS infrastructure, and Generative AI solutions.",
            points: [
                "Developing scalable backend systems with Laravel and FastAPI.",
                "Managing and optimizing AWS cloud infrastructure.",
                "Implementing advanced Generative AI features for enterprise applications."
            ]
        },
        {
            company: "SSL Wireless",
            role: "Software Specialist",
            period: "Feb 2025 - Oct 2025",
            description: "Specializing in Backend Development and R&D for GEN AI and LLM-based projects.",
            points: [
                "Designed and implemented scalable REST APIs and robust MySQL architectures.",
                "Integrated third-party APIs (Meta, Telegram, Google Dialogflow) for automation.",
                "Led POC developments for AI-driven solutions and provided technical support."
            ]
        },
        {
            company: "SSL Wireless",
            role: "Software Associate",
            period: "Jan 2024 - Feb 2025",
            description: "Focused on developing and maintaining web applications using Laravel, Django, and FastAPI.",
            points: [
                "Architected robust MySQL databases and designed RESTful API systems.",
                "Managed Docker-based environments for efficient deployment and scalability.",
                "Conducted R&D for GenAI projects with a focus on chatbot development."
            ]
        },
        {
            company: "Automate IT Limited",
            role: "Software Developer (Part-time)",
            period: "Oct 2023 - Dec 2023",
            description: "Full-stack developer focusing on REST API development and frontend integration.",
            points: [
                "Developed REST APIs using Laravel and integrated them with Nuxt.js.",
                "Designed web pages from Figma designs using Bootstrap and modern CSS.",
                "Worked on Academy IMS and other demo products."
            ]
        },
        {
            company: "Fair News Service Ltd",
            role: "Software Developer",
            period: "Jul 2022 - Aug 2023",
            description: "Full-stack developer for a high-frequency news service agency (fns24.com).",
            points: [
                "Developed the core news portal using Laravel and MySQL.",
                "Implemented frontend designs using Jquery and Bootstrap.",
                "Maintained account management, shop, and news distribution systems."
            ]
        },
        {
            company: "Zakir Soft",
            role: "Full-stack Developer (Intern)",
            period: "May 2021 - Dec 2021",
            description: "Working on SASS-based products with Laravel, Vue, and Nuxt.js.",
            points: [
                "Developed REST APIs for internal SASS products.",
                "Integrated backend services into modern Vue/Nuxt frontends.",
                "Collaborated on database design and Git-based version control."
            ]
        }
    ]

    const ACHIEVEMENTS = [
        {
            title: "Research Publication",
            organization: "MDPI Journal",
            date: "2022",
            description: "Early Detection of Breast Cancer Using Deep Learning (CNN). Published in a peer-reviewed international journal."
        },
        {
            title: "Top Contributor",
            organization: "Open Source Communities",
            date: "Ongoing",
            description: "Active contributor to various PHP and Python open-source projects, including the Doppar framework."
        },
        {
            title: "BSc in CSE - CGPA 3.86",
            organization: "South-East University",
            date: "2022",
            description: "Graduated with high honors and a focus on software engineering and artificial intelligence."
        }
    ]

    return {
        PROJECTS,
        SKILLS,
        EXPERIENCE,
        ACHIEVEMENTS
    }
}