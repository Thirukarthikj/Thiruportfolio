import profileImg from '../assets/myself.jpeg';

export const personalInfo = {
  name: "Thiru Karthik J",
  shortName: "Thiru",
  avatarUrl: profileImg,
  role: "Full Stack Developer · MCA Student · Tech Enthusiast",
  bio: "A driven full-stack developer building production-grade web applications with clean architecture, secure backends, and polished interfaces. Currently pursuing MCA at Karpagam Academy of Higher Education.",
  objective: "To establish a career in a dynamic and progressive organization where my skills contribute to the company's goals while supporting continuous personal and professional growth.",
  extendedBio: "My work spans a production-grade e-commerce system with Stripe payment integration, an IoT-based hardware safety project, and responsive PHP web applications — grounded in a commitment to clean code and real-world impact.",
  location: "Tamil Nadu, India",
  email: "jthirukarthick@gmail.com",
  phone: "+91 93425 53805",
  github: "thirukarthik1516",
  githubUrl: "https://github.com/thirukarthik1516",
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
    id: "gen-fashion",
    tag: "Full Stack · E-Commerce · PG Project 2025–26",
    title: "GEN FASHION — Online Fashion Store",
    iconName: "ShoppingBag",
    iconChar: "👌",
    liveUrl: "https://genfashion.vercel.app/",
    description: "A production-grade full-stack e-commerce platform built with Next.js 14 and React 18. Features complete user authentication, Stripe-integrated checkout, Redux-powered global state, and a fully protected admin dashboard — all 35 test cases passed.",
    features: [
      "12 independent modules including authentication, product catalog, cart, checkout, orders, and admin CRUD",
      "JWT HTTP-only cookie auth with bcrypt password hashing and protected API middleware",
      "Stripe PCI-compliant card payment with 3-step checkout wizard and order confirmation flow",
      "Fully responsive from 375px mobile to 1920px desktop using Tailwind CSS",
      "Real-time debounced search modal, multi-criteria filtering, sorting, and pagination"
    ],
    techStack: ["Next.js 14", "React 18", "Redux Toolkit", "Tailwind CSS", "JWT + bcrypt", "Stripe", "Node.js", "REST APIs"],
    highlights: {
      domain: "genfashion.vercel.app",
      testCases: "35 / 35 Passed",
      modules: "12 Complete Modules",
      security: "JWT + Bcrypt Auth",
      payment: "Stripe PCI-Compliant"
    }
  },
  {
    id: "iot-safety",
    tag: "IoT · Embedded Systems · Safety Tech · UG Project",
    title: "IoT Device for Rash Driving Monitoring System",
    iconName: "Car",
    iconChar: "🚗",
    description: "A real-world IoT solution designed to reduce road accidents by monitoring vehicle speed, uniquely identifying vehicles, and tracking their GPS location in real time.",
    features: [
      "Measures vehicle speed dynamically using IR sensors based on distance and time calculations",
      "RFID card technology uniquely identifies each vehicle; RFID 522 module flags overspeeding events",
      "Integrated GPS module continuously tracks vehicle location for real-time monitoring",
      "Automated alert system notifies relevant parties when speed limits are exceeded"
    ],
    techStack: ["IoT", "IR Sensor", "RFID 522", "GPS Module", "Embedded C", "Hardware Integration"],
    highlights: {
      sensors: "IR + RFID 522",
      tracking: "GPS Real-time",
      alert: "Automated Overspeed Trigger"
    }
  },
  {
    id: "responsive-apps",
    tag: "Web Development · Internship Project 2024",
    title: "Responsive Web Applications",
    iconName: "Globe",
    iconChar: "🌐",
    description: "Developed a fully responsive college website and a real-time PHP web application for NISU Technologies during an internship at RV Computers, Sivakasi.",
    features: [
      "Built a responsive college website with clean layout and cross-device compatibility",
      "Developed a real-time PHP application for NISU Technologies with dynamic backend logic",
      "Both projects delivered within a focused 30-day engagement"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "Responsive Design"],
    highlights: {
      delivery: "30-Day Project Turnaround",
      clients: "RV Computers & NISU Tech"
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
