import profileImg from '../assets/myself.jpeg';

export const personalInfo = {
  name: "Thiru Karthik J",
  shortName: "Thiru",
  avatarUrl: profileImg,
  role: "Full Stack Developer · MCA Student · Tech Enthusiast",
  bio: "A driven full-stack developer building production-grade web applications with clean architecture, secure backends, and polished interfaces. Currently pursuing MCA at Karpagam Academy of Higher Education.",
  objective: "To establish a career in a dynamic and progressive organization where my skills contribute to the company's goals while supporting continuous personal and professional growth.",
  extendedBio: "My work spans production-grade web applications, commercial B2B portals, full-stack e-commerce systems with Stripe payment integration, digital agency platforms, and IoT hardware safety systems — grounded in clean architecture, performance, and real-world impact.",
  location: "Tamil Nadu, India",
  email: "jthirukarthick@gmail.com",
  phone: "+91 93425 53805",
  github: "Thirukarthikj",
  githubUrl: "https://github.com/Thirukarthikj",
  linkedin: "linkedin.com/in/thirukarthik",
  linkedinUrl: "http://www.linkedin.com/in/thirukarthik",
  currentStudy: "MCA 2025–2027",
  registrationNo: "25CAP057",
  languages: ["Tamil", "English", "Telugu"]
};

export const stats = [
  { value: "35", total: "/35", label: "Tests Passed" },
  { value: "12", total: "+", label: "Modules Built" },
  { value: "2", total: "+", label: "Internships" },
  { value: "6", total: "+", label: "Certifications" }
];

export const softSkills = [
  "Good Communication",
  "Self-Motivated",
  "Self-Confident",
  "Adaptable",
  "Team Player",
  "Problem Solver"
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML & CSS", "JavaScript", "React 18", "Next.js 14", "Tailwind CSS"]
  },
  {
    title: "State & Auth",
    skills: ["Redux Toolkit", "JWT", "bcrypt", "REST APIs"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "PHP", "Stripe API", "API Routes"]
  },
  {
    title: "Programming",
    skills: ["C", "C++", "Java", "Python", "OOP"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "JSON / db.json"]
  },
  {
    title: "Tools & Design",
    skills: ["MS Office", "Tally", "Photoshop", "CorelDRAW", "Git / GitHub"]
  }
];

export const educationList = [
  {
    id: "mca",
    year: "2025 – 2027 · Pursuing",
    degree: "Master of Computer Applications (MCA)",
    institution: "Karpagam Academy of Higher Education, Coimbatore",
    type: "Deemed University",
    status: "Currently Enrolled · Reg. 25CAP057",
    logo: "https://kahedu.edu.in/n/wp-content/uploads/2022/02/mob-logo.jpg",
    logoFallback: "KA"
  },
  {
    id: "bca",
    year: "2022 – 2025 · Completed",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Sri Kaliswari College, Sivakasi",
    type: "Madurai Kamaraj University",
    status: "CGPA: 7.12",
    logo: "https://kaliswaricollege.edu.in/wp-content/uploads/2020/06/logo1.png",
    logoFallback: "SK"
  }
];

export const projectsList = [
  {
    id: "andavar-traders",
    tag: "Live Production · Commercial Printing & Packaging Web Platform",
    title: "Andavar Traders — Commercial Printing & Custom Packaging",
    iconName: "Printer",
    iconChar: "🖨️",
    liveUrl: "https://printingservice-phi.vercel.app/",
    description: "A comprehensive commercial printing and packaging web platform engineered for Andavar Traders. Highlights business stationery, educational materials, custom packaging boxes, executive diaries, calendars, and marketing collateral with an interactive product carousel, masonry portfolio gallery, and instant quotation request flow.",
    features: [
      "Engineered an interactive product showcase featuring 6 commercial verticals: Business Printing, Educational, Marketing, Calendars, Diaries, and Packaging",
      "Built a high-resolution masonry gallery exhibiting client print samples, packaging prototypes, and corporate branding collateral",
      "Implemented an intuitive 6-step printing production process timeline paired with dynamic trust statistics counters",
      "Designed conversion-focused lead generation funnels with direct WhatsApp quick chat and multi-field quote request forms",
      "Created a distinct print-industry visual identity featuring CMYK registration mark design motifs and responsive layouts"
    ],
    techStack: ["HTML5", "Vanilla CSS3", "JavaScript ES6", "Lucide Icons", "Masonry Gallery", "Responsive UI"],
    highlights: {
      domain: "printingservice-phi.vercel.app",
      niche: "Printing & Packaging Solutions",
      portfolio: "6 Print Categories + Masonry Gallery",
      leadFunnel: "Quote Request & WhatsApp Integration"
    }
  },
  {
    id: "gen-fashion",
    tag: "Full Stack · E-Commerce Platform · PG Project 2025–26",
    title: "GEN FASHION — Premium Lifestyle & Fashion Store",
    iconName: "ShoppingBag",
    iconChar: "🛍️",
    liveUrl: "https://genfashion.vercel.app/",
    description: "A production-grade full-stack luxury fashion e-commerce platform built with Next.js 14, React 18, and Tailwind CSS. Features curated Men, Women, and Kids collections, real-time debounced search, global state management via Redux Toolkit, wishlist & cart systems, dark/light mode, and PCI-compliant Stripe checkout.",
    features: [
      "Architected 12 comprehensive production modules including authentication, dynamic catalog, cart, wishlist, checkout wizard, and admin CRUD",
      "Secured session management via JWT HTTP-only cookies, bcrypt password hashing, and protected route middleware",
      "Integrated Stripe PCI-compliant card payments with order confirmation and transactional workflows",
      "Implemented multi-criteria filtering by category (Men, Women, Kids), subcategories, color palettes, and real-time debounced modal search",
      "Passed all 35 rigorous unit and integration test cases with 100% test suite pass rate across frontend and API routes"
    ],
    techStack: ["Next.js 14", "React 18", "Redux Toolkit", "Tailwind CSS", "Stripe API", "JWT + bcrypt", "Node.js REST APIs"],
    highlights: {
      domain: "genfashion.vercel.app",
      testCases: "35 / 35 Passed",
      architecture: "Next.js App Router + Redux",
      payment: "Stripe PCI-Compliant Checkout"
    }
  },
  {
    id: "surxtech",
    tag: "Live Production · IT Startup & Creative Studio · Official Site",
    title: "SurxTech — IT Services & Digital Product Studio",
    iconName: "Zap",
    iconChar: "⚡",
    liveUrl: "https://surxtech.vercel.app/",
    description: "The official corporate web platform for SurxTech, a results-driven IT startup and digital agency based in Coimbatore. Showcases full-lifecycle digital services including Web Development, Mobile Apps, UI/UX Design, Branding, and Media Production with high-performance GSAP animations, theme switching, and interactive case studies.",
    features: [
      "Built an interactive services architecture featuring comprehensive modal case studies, deliverable breakdowns, and project booking flows",
      "Implemented smooth GSAP animations, scroll-triggered reveals, and micro-interactions for a high-end agency aesthetic",
      "Crafted a dynamic Dark & Light theme switcher with persistent user preference storage and seamless CSS variable transitions",
      "Integrated client case study modules highlighting project timelines, client deliverables, and verifiable business transformation metrics",
      "Designed conversion touchpoints including direct email routing, Instagram integration, and one-click WhatsApp project initiation"
    ],
    techStack: ["React", "JavaScript", "GSAP Animations", "Lucide React", "CSS Variables", "Modern Glassmorphism"],
    highlights: {
      domain: "surxtech.vercel.app",
      services: "Web, Mobile, UI/UX & Branding",
      animations: "GSAP-Powered Interactions",
      headquarters: "Coimbatore, India"
    }
  },
  {
    id: "sivakasi-trading-agency",
    tag: "Live Production · Wholesale B2B Fireworks Portal · Sivakasi Heritage",
    title: "Sivakasi Trading Agency — Fireworks Wholesale & B2B Portal",
    iconName: "Sparkles",
    iconChar: "🎆",
    liveUrl: "https://firecrackerssivakasi.vercel.app/",
    description: "A wholesale and B2B fireworks web portal for Sivakasi Trading Agency, celebrating 25+ years of Sivakasi manufacturing craftsmanship. Built with high-energy festival branding, dynamic category showcase for CSIR-NEERI certified green crackers, digital wholesale price lists, safety guidelines, and pan-India logistics routing.",
    features: [
      "Showcases a comprehensive fireworks catalog spanning sparklers, ground chakkars, flower pots, multi-shot aerial cakes, and gift boxes",
      "Provides digital wholesale price lists with volume discount breakdowns and direct seasonal booking calculators",
      "Dedicated festival safety guidelines and legal compliance portal covering CSIR-NEERI green cracker standards",
      "Interactive pan-India freight and logistics documentation detailing transport hub routing across major national corridors",
      "Engineered with Tailwind CSS, custom scroll-reveal animations, mobile-first navigation drawer, and sticky executive header"
    ],
    techStack: ["HTML5", "Tailwind CSS", "JavaScript", "Plus Jakarta Sans", "Scroll Reveal", "SEO Schema"],
    highlights: {
      domain: "firecrackerssivakasi.vercel.app",
      heritage: "25+ Years Fireworks Wholesale",
      ecoFriendly: "CSIR-NEERI Green Crackers",
      logistics: "Pan-India Freight Delivery Network"
    }
  },
  {
    id: "myma-foods",
    tag: "Live Production · Food Manufacturing & B2B E-Commerce · Saathur Specialty",
    title: "Myma Foods — Traditional Saathur Snacks & Savouries",
    iconName: "Utensils",
    iconChar: "🍲",
    liveUrl: "https://mymafood.vercel.app/",
    description: "A commercial food manufacturing web portal and e-commerce platform for Myma Foods, premier producers of authentic Saathur savouries in Tamil Nadu. Features bilingual localization (English & Tamil), dynamic online shopping cart, commercial FSSAI facility verification, and bulk distributor enquiry workflows.",
    features: [
      "Integrated bilingual i18n support with instant English and Tamil (தமிழ்) translation for regional customer accessibility",
      "Interactive e-commerce shopping experience with client-side cart badge state, quantity controls, and streamlined checkout",
      "Showcases authentic Saathur recipes: Traditional Saathur Mixture, Ribbon Sev, Butter Murukku, and Spicy Boondi",
      "Presents commercial facility capabilities, FSSAI hygiene certifications, and high-volume wholesale distributor supply terms",
      "Features executive topbar with direct calling, quick WhatsApp ordering, and responsive drawer navigation"
    ],
    techStack: ["HTML5", "CSS3 Custom Properties", "JavaScript ES6", "Bilingual i18n (EN/TA)", "Cart State", "FSSAI Compliance"],
    highlights: {
      domain: "mymafood.vercel.app",
      cuisine: "Authentic Saathur Savouries",
      localization: "English & Tamil (Bilingual)",
      standards: "FSSAI Certified Commercial Facility"
    }
  },
  {
    id: "bright-engineering",
    tag: "Live Production · Industrial B2B Catalog · Printing Machinery Spares",
    title: "Bright Engineering — Printing Machine Spares & Components",
    iconName: "Settings",
    iconChar: "⚙️",
    liveUrl: "https://be-beta-one.vercel.app/",
    description: "An industrial B2B engineering catalog and digital procurement platform for Bright Engineering, supplying precision printing machine spare parts across domestic and export markets. Features a 17-category megamenu directory for printing presses including Heidelberg, Komori, Mitsubishi, and Muller Martini.",
    features: [
      "Engineered an extensive 17-category industrial catalog spanning Press Machinery Spares, Finishing, Pneumatics, Pumps, and Electricals",
      "Multi-column megamenu navigation with quick brand filtering, direct category routing, and custom parts search",
      "Precision B2B RFQ (Request for Quote) system allowing industrial press operators to request bespoke machined components",
      "Compatibility directory covering global press manufacturers: Heidelberg, Komori, Mitsubishi, Ryobi, Roland, KBA, and Kolbus",
      "Built with pure Vanilla CSS, JetBrains Mono & Plus Jakarta Sans typography, and high-contrast dark/light industrial aesthetics"
    ],
    techStack: ["HTML5", "Vanilla CSS3", "JavaScript ES6", "Industrial Megamenu", "Material Symbols", "B2B RFQ Engine"],
    highlights: {
      domain: "be-beta-one.vercel.app",
      catalog: "17 Specialized Spare Categories",
      machinery: "Heidelberg, Komori, Mitsubishi & More",
      procurement: "B2B RFQ & Bespoke Machining"
    }
  },
  {
    id: "rir-tours",
    tag: "Live Production · Client Web App · Travel & Tourism",
    title: "RIR Tours & Travels — Booking & Sightseeing Portal",
    iconName: "Compass",
    iconChar: "🧳",
    liveUrl: "https://www.rirtoursandtravels.com/",
    description: "A production-live travel platform for RIR Tours and Travels based in Kodaikanal. Delivers instant cab bookings, customized sightseeing tour packages (honeymoon, family, one-way cabs), and interactive route details with optimized performance and SEO schema integration.",
    features: [
      "Built a high-performance web platform featuring Kodaikanal tour package bookings, taxi services, and sightseeing itineraries",
      "Integrated full SEO Schema.org structured data (TravelAgency & WebSite graph) for local search dominance",
      "Designed responsive UI with fast image optimization via Cloudinary CDN and smooth mobile navigation",
      "Features quick WhatsApp & direct calling CTAs, location geotargeting (Kodaikanal), and dynamic enquiry forms"
    ],
    techStack: ["React", "JavaScript", "HTML5 / CSS3", "Cloudinary CDN", "SEO Schema.org", "Responsive UX"],
    highlights: {
      status: "Live Production Site",
      domain: "rirtoursandtravels.com",
      niche: "Tour Packages & Cab Booking",
      seo: "Schema.org TravelAgency"
    }
  },
  {
    id: "iot-safety",
    tag: "IoT · Embedded Systems · Safety Tech · UG Final Year Project",
    title: "IoT Device for Rash Driving Monitoring System",
    iconName: "Car",
    iconChar: "🚗",
    description: "A real-world IoT hardware solution designed to reduce road accidents by dynamically monitoring vehicle speed, uniquely identifying vehicles, and tracking GPS locations in real time.",
    features: [
      "Measures vehicle speed dynamically using IR sensors based on high-frequency distance and time calculations",
      "RFID card technology uniquely identifies each vehicle; RFID 522 module flags overspeeding violations",
      "Integrated GPS module continuously tracks vehicle location for real-time geographic monitoring",
      "Automated alert system notifies traffic authorities and fleet operators when speed limits are breached"
    ],
    techStack: ["IoT", "IR Sensor", "RFID 522", "GPS Module", "Embedded C", "Hardware Integration"],
    highlights: {
      sensors: "IR + RFID 522",
      tracking: "GPS Real-time",
      alert: "Automated Overspeed Trigger",
      hardware: "Microcontroller + Sensors"
    }
  }
];

export const experienceList = [
  {
    id: "gk-creations",
    role: "Full Stack Developer Intern",
    company: "GK Creations, Sivakasi",
    logoText: "GK",
    duration: "15 Days · May 04 – May 20, 2026",
    description: "Completed Industrial Exposure Training as a Fullstack Developer. Demonstrated technical proficiency and dedication across web development tasks and project responsibilities. Performance was rated highly satisfactory by the proprietor."
  },
  {
    id: "rv-computers",
    role: "Web Developer Intern",
    company: "RV Computers, Sivakasi",
    logoText: "RV",
    duration: "30 Days · May – June 2024",
    description: "Developed a responsive college website and a real-time PHP application for NISU Technologies. Gained hands-on exposure to professional web development workflows, bridging academic knowledge with industry practice."
  }
];

export const certificationsList = [
  {
    id: "microsoft",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft",
    icon: "Sparkles",
    badge: "Microsoft Certified"
  },
  {
    id: "mathworks",
    title: "Deep Learning Onramp",
    issuer: "MathWorks",
    icon: "Brain",
    badge: "MATLAB / Deep Learning"
  },
  {
    id: "bentley",
    title: "3D Structural Modeling",
    issuer: "Bentley Institute",
    icon: "Box",
    badge: "Bentley Certified"
  },
  {
    id: "mongodb",
    title: "MongoDB Basics & CRUD",
    issuer: "MongoDB University",
    icon: "Database",
    badge: "NoSQL DB"
  },
  {
    id: "nptel",
    title: "Developing Soft Skills & Personality",
    issuer: "NPTEL / IIT",
    icon: "Award",
    badge: "NPTEL Certified"
  },
  {
    id: "e-yantra",
    title: "Robotics & Embedded Systems",
    issuer: "IIT Bombay e-Yantra",
    icon: "Cpu",
    badge: "IIT Bombay"
  }
];

export const achievementsList = [
  {
    num: "01",
    title: "Technical Program — Software Development",
    text: "Attended a program on software development at Tech Volt Software Pt. Ltd., gaining insights into industry-level development practices and trends."
  },
  {
    num: "02",
    title: "Workshop — Machine Learning in Python",
    text: "Attended a hands-on workshop on Machine Learning with Python, exploring foundational algorithms and practical implementations with real datasets."
  },
  {
    num: "03",
    title: "GEN FASHION — 35/35 Test Cases Passed",
    text: "Designed and delivered a complete e-commerce platform with all 35 test cases passing across authentication, cart, checkout, payment, and admin modules."
  },
  {
    num: "04",
    title: "6 Professional Certifications",
    text: "Earned certifications across AI (Microsoft), deep learning (MathWorks), structural modeling (Bentley), MongoDB, soft skills (NPTEL), and robotics (IIT Bombay)."
  }
];
