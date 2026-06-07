export const personal = {
  name: 'Vaishnavi Naga Sunanda',
  lastName: 'Parasa',
  initials: 'PVNS.',
  tagline: 'Data Analyst',
  roles: ['Data Analyst', 'Business Intelligence', 'Cloud & Analytics', 'ML Enthusiast'],
  bio: `Detail-oriented Data Analyst and MCA candidate with a passion for transforming complex datasets into actionable insights. Proficient in Tableau, Power BI, Python, and SQL — with hands-on experience in end-to-end data pipelines, AWS cloud infrastructure, and machine learning.`,
  email: 'vaishnaviparasa2004@gmail.com',
  phone: '+91-8688337723',
  location: 'Palakollu, Andhra Pradesh, India',
  github: 'https://github.com/VaishnaviNagaSunanda',
  linkedin: 'https://linkedin.com/in/vaishnavi-naga-sunanda-parasa-641117281',
  resume: '/resume.pdf',
};

export const skills = {
  'Data & Visualization': [
    { name: 'Tableau', level: 88 },
    { name: 'Power BI', level: 85 },
    { name: 'Excel (Advanced)', level: 90 },
    { name: 'Data Storytelling', level: 82 },
  ],
  'Programming': [
    { name: 'Python (Pandas, NumPy, Scikit-learn)', level: 86 },
    { name: 'SQL', level: 88 },
    { name: 'Java', level: 75 },
    { name: 'JavaScript', level: 78 },
  ],
  'Database': [
    { name: 'MySQL', level: 85 },
    { name: 'MongoDB', level: 78 },
    { name: 'SQLite', level: 80 },
  ],
  'Cloud & AI': [
    { name: 'AWS (EC2, S3, IAM)', level: 80 },
    { name: 'Machine Learning', level: 78 },
    { name: 'Deep Learning / CNNs', level: 72 },
    { name: 'Flask', level: 76 },
  ],
  'Tools': [
    { name: 'Git & GitHub', level: 88 },
    { name: 'Jupyter Notebook', level: 90 },
    { name: 'VS Code', level: 92 },
    { name: 'HTML / CSS', level: 82 },
  ],
};

export const skillIcons = {
  'Tableau': '📊', 'Power BI': '📈', 'Excel (Advanced)': '📋', 'Data Storytelling': '📖',
  'Python (Pandas, NumPy, Scikit-learn)': '🐍', 'SQL': '🗄️', 'Java': '☕', 'JavaScript': '⚡',
  'MySQL': '🐬', 'MongoDB': '🍃', 'SQLite': '💾',
  'AWS (EC2, S3, IAM)': '☁️', 'Machine Learning': '🤖', 'Deep Learning / CNNs': '🧠', 'Flask': '🌶️',
  'Git & GitHub': '🔀', 'Jupyter Notebook': '📓', 'VS Code': '💻', 'HTML / CSS': '🎨',
};

export const experience = [
  {
    role: 'Data Analytics Intern',
    company: 'SmartBridge (in collaboration with APSCHE)',
    period: 'June 2025 – August 2025',
    type: 'Internship',
    color: '#00f0b4',
    points: [
      'Conducted end-to-end data analysis on real-time datasets using Tableau, applying data wrangling, EDA, and visualization techniques to surface actionable business insights.',
      'Designed interactive Tableau dashboards to monitor KPIs; applied data cleaning and transformation pipelines to improve data quality across multiple datasets.',
    ],
  },
  {
    role: 'AWS Cloud Computing Intern',
    company: 'Adhoc Network Tech',
    period: 'February 2024 – April 2025',
    type: 'Internship',
    color: '#ff9900',
    points: [
      'Deployed and configured core AWS services including EC2, S3, and IAM to architect secure, scalable cloud environments.',
      'Optimized cloud resource utilization and reduced operational costs through performance tuning and right-sizing strategies during real-time deployments.',
    ],
  },
];

export const projects = [
  {
    title: 'QR-Based Smart Car Parking System',
    date: 'January 2025',
    description: 'A full-stack smart parking management system using QR codes for automated vehicle entry/exit tracking. Features real-time slot availability monitoring, automated billing computation, and instant notifications.',
    tech: ['Python', 'Flask', 'MongoDB', 'HTML', 'CSS', 'QR Code'],
    github: 'https://github.com/VaishnaviNagaSunanda',
    live: null,
    category: 'Full Stack',
    highlight: true,
  },
  {
    title: 'Monument Identification using Deep Learning',
    date: 'October 2024',
    description: 'An AI-powered application for real-time monument recognition using Convolutional Neural Networks with transfer learning. Integrated Augmented Reality (AR) overlays for interactive 3D visualizations and geolocation data.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Flask', 'SQLite', 'AR', 'CNN'],
    github: 'https://github.com/VaishnaviNagaSunanda',
    live: null,
    category: 'AI / ML',
    highlight: true,
  },
  {
    title: 'CodeConnect',
    date: 'December 2025',
    description: 'A full-stack MERN coding platform helping users master algorithms and connect with companies. Features real-time code execution, interview prep modules, leaderboards, and recruiter discovery tools.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/VaishnaviNagaSunanda',
    live: null,
    category: 'Full Stack',
    highlight: false,
  },
  {
    title: 'PhotoBooth Chatbot',
    date: 'November 2024',
    description: 'An engaging AI chatbot for photo booths that interacts with users in real-time. Powered by Dialogflow NLP with a Python/Flask backend, delivering creative photo suggestions, filter recommendations, and memory-making prompts.',
    tech: ['Python', 'Flask', 'Dialogflow', 'NLP'],
    github: 'https://github.com/VaishnaviNagaSunanda',
    live: null,
    category: 'AI / Chatbot',
    highlight: false,
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Swarnandhra College of Engineering and Technology',
    location: 'Narsapuram',
    period: '2024 – 2026',
    cgpa: '8.5',
    icon: '🎓',
  },
  {
    degree: 'Bachelor of Science in Computer Science (B.Sc)',
    institution: 'Aditya Degree College',
    location: 'Palakollu',
    period: '2021 – 2024',
    cgpa: '8.9',
    icon: '📚',
  },
];

export const certifications = [
  {
    title: 'Introduction to Machine Learning',
    issuer: 'NPTEL',
    icon: '🤖',
    color: '#00f0b4',
  },
  {
    title: 'AWS Solutions Architecture Job Simulation',
    issuer: 'Forage / AWS',
    icon: '☁️',
    color: '#ff9900',
  },
  {
    title: 'Foundations of Programming with Python',
    issuer: 'ExcelR',
    icon: '🐍',
    color: '#3776ab',
  },
  {
    title: 'Cyber Security Essentials',
    issuer: 'Cisco',
    icon: '🔐',
    color: '#1ba0d7',
  },
];

export const achievements = [
  {
    icon: '💻',
    title: '50+ Coding Problems Solved',
    description: 'Demonstrated proficiency in algorithms, data structures, and problem-solving on LeetCode, CodeChef, and GeeksforGeeks.',
    platforms: ['LeetCode', 'CodeChef', 'GeeksforGeeks'],
  },
  {
    icon: '📊',
    title: 'KPI Dashboard Designer',
    description: 'Designed and deployed interactive Tableau dashboards that surface real-time business insights for organizational decision-making.',
    platforms: ['Tableau', 'SmartBridge'],
  },
  {
    icon: '☁️',
    title: 'AWS Cloud Architect',
    description: 'Successfully architected secure, scalable cloud environments using EC2, S3, and IAM with cost optimization strategies.',
    platforms: ['AWS', 'Adhoc Network Tech'],
  },
  {
    icon: '🏆',
    title: 'Academic Excellence',
    description: 'Maintained 8.9 CGPA in B.Sc Computer Science and 8.5 CGPA in MCA, demonstrating consistent academic performance.',
    platforms: ['MCA 8.5 CGPA', 'B.Sc 8.9 CGPA'],
  },
];
