export const company = {
  name: 'Hireorbits Solution Private Limited',
  tagline: 'Empowering Businesses Through People & Innovation',
  address: 'G10, Block A, Danapur Cantt, Dinapur-Cum-Khagaul, Patna – 801503, Bihar, India',
  hours: 'Monday–Friday, 9:00 AM–6:30 PM IST',
  linkedin: 'https://linkedin.com/company/hireorbits',
};

export const navigation = [
  {
    label: 'Company',
    links: [
      ['About us', 'about/'],
      ['Why Hireorbits', 'why-us/'],
    ],
  },
  {
    label: 'Solutions',
    links: [
      ['All services', 'services/'],
      ['Technology solutions', 'technology/'],
      ['Staffing solutions', 'staffing/'],
      ['SAP solutions', 'sap/'],
    ],
  },
  { label: 'Industries', href: 'industries/' },
  {
    label: 'Insights',
    links: [
      ['Blog & insights', 'insights/'],
      ['Case studies', 'case-studies/'],
      ['Resources', 'resources/'],
    ],
  },
  { label: 'Careers', href: 'careers/' },
];

export const services = [
  {
    id: 'sap',
    group: 'technology',
    icon: 'grid',
    title: 'SAP consulting & enterprise solutions',
    description:
      'SAP consultants and specialist talent to implement, run, and modernize your SAP landscape.',
    items: [
      'SAP consulting and implementation support',
      'SAP functional and technical talent',
      'SAP S/4HANA and ERP solutions',
      'SAP ABAP and application support',
      'SAP FICO, MM, SD, PP, HCM, and other module-specific staffing, based on project requirements',
      'SAP support, maintenance, and digital transformation',
    ],
  },
  {
    id: 'software',
    group: 'technology',
    icon: 'code',
    title: 'Software development',
    description:
      'Thoughtfully engineered software. Built around your business, ready for what comes next.',
    items: [
      'Enterprise applications',
      'Custom software development',
      'Web application development',
      'Mobile application development',
      'SaaS product development',
      'API & system integration',
      'Product engineering',
    ],
  },
  {
    id: 'ai-data',
    group: 'technology',
    icon: 'spark',
    title: 'AI & data engineering',
    description:
      'Turn your data into clearer decisions and intelligent, everyday business applications.',
    items: [
      'Artificial intelligence solutions',
      'Machine learning',
      'Generative AI',
      'Data engineering',
      'Business intelligence & analytics',
      'Data science',
      'Predictive analytics',
      'Intelligent automation',
    ],
  },
  {
    id: 'cloud',
    group: 'technology',
    icon: 'cloud',
    title: 'Cloud & DevOps',
    description:
      'Modern infrastructure that gives your teams the freedom to build, deploy, and scale.',
    items: [
      'Amazon Web Services (AWS)',
      'Microsoft Azure',
      'Google Cloud Platform (GCP)',
      'DevOps & CI/CD automation',
      'Cloud migration',
      'Infrastructure modernization',
      'Kubernetes & containerization',
      'Site reliability engineering (SRE)',
    ],
  },
  {
    id: 'it-staffing',
    group: 'staffing',
    icon: 'people',
    title: 'IT staffing & talent acquisition',
    description:
      'Connect with the right technical people, from your next specialist to your next leadership hire.',
    items: [
      'Contract staffing',
      'Permanent hiring',
      'Executive search',
      'Global recruitment',
      'Offshore recruitment support',
      'Recruitment process outsourcing (RPO)',
      'Managed staffing services',
    ],
  },
  {
    id: 'engineering',
    group: 'staffing',
    icon: 'grid',
    title: 'Engineering & manufacturing',
    description:
      'Specialist talent to move your ideas from the drawing board to the production floor.',
    items: [
      'Mechanical engineering',
      'Electrical & electronics engineering',
      'Civil & infrastructure engineering',
      'Manufacturing & production staffing',
      'Automotive engineering',
      'Industrial automation',
      'Quality & process engineering',
      'Plant operations & maintenance',
      'CAD/CAM & product design',
      'Supply chain & procurement staffing',
    ],
  },
  {
    id: 'healthcare',
    group: 'staffing',
    icon: 'cross',
    title: 'Healthcare staffing',
    description:
      'Support your care delivery and operations with clinical, administrative, and technology talent.',
    items: [
      'Clinical staffing',
      'Non-clinical staffing',
      'Allied healthcare professionals',
      'Medical coding & billing',
      'Health information management (HIM)',
      'Revenue cycle management (RCM)',
      'Healthcare administration',
      'Healthcare IT staffing',
    ],
  },
  {
    id: 'semiconductor',
    group: 'staffing',
    icon: 'chip',
    title: 'Semiconductor & electronics',
    description:
      'Specialized engineering expertise across the chip, embedded systems, and hardware lifecycle.',
    items: [
      'VLSI design & verification',
      'ASIC/FPGA engineering',
      'Embedded systems',
      'Semiconductor manufacturing',
      'Electronics design',
      'Chip validation & testing',
      'Firmware development',
      'PCB design',
      'Hardware engineering',
    ],
  },
  {
    id: 'professional',
    group: 'staffing',
    icon: 'briefcase',
    title: 'Professional staffing',
    description:
      'Bring the right people into the essential business functions that keep your organization moving.',
    items: [
      'Finance & accounting',
      'Banking & financial services (BFSI)',
      'Insurance',
      'Human resources',
      'Sales & marketing',
      'Customer support & BPO',
      'Procurement & supply chain',
      'Retail & e-commerce',
      'Logistics & warehousing',
      'Education & training',
      'Legal & compliance',
      'Administrative & back office support',
    ],
  },
  {
    id: 'consulting',
    group: 'technology',
    icon: 'grid',
    title: 'ERP & digital consulting',
    description:
      'Connect business strategy, enterprise platforms, and processes for a more effective organization.',
    items: [
      'SAP consulting',
      'Oracle solutions',
      'Microsoft Dynamics 365',
      'Enterprise resource planning (ERP)',
      'Supply chain consulting',
      'Business process automation',
      'Digital transformation',
      'IT strategy & technology consulting',
    ],
  },
  {
    id: 'managed',
    group: 'technology',
    icon: 'shield',
    title: 'Quality & managed services',
    description:
      'Keep your applications reliable and your teams supported throughout the delivery lifecycle.',
    items: [
      'QA & test automation',
      'Performance testing',
      'Cybersecurity services',
      'UI/UX design',
      'Managed IT services',
      'Application support & maintenance',
      'Global capability center (GCC) setup support',
      'Project management office (PMO) services',
      'Technical support & helpdesk services',
    ],
  },
];

export const industries = [
  'Manufacturing',
  'Automotive',
  'Semiconductor & electronics',
  'Healthcare & life sciences',
  'Banking & financial services',
  'Retail & e-commerce',
  'Supply chain & logistics',
  'Technology & digital',
  'Insurance',
  'Telecommunications',
  'Energy & utilities',
  'Education',
  'Engineering & industrial services',
  'Pharmaceutical & biotechnology',
  'Consumer goods & FMCG',
];

export const models = [
  { title: 'Onsite', description: 'Work side by side with specialists embedded in your teams.' },
  {
    title: 'Offshore',
    description: 'Extend your capabilities with a dedicated remote delivery team.',
  },
  {
    title: 'Hybrid',
    description: 'Combine local collaboration with the reach of offshore expertise.',
  },
  { title: 'Remote', description: 'Access the skills you need, wherever your business operates.' },
];

export const strengths = [
  [
    'People who understand your business',
    'Our consultants, engineers, and recruitment specialists bring domain knowledge to your technology and workforce challenges.',
  ],
  [
    'The flexibility to move forward',
    'From a specialist hire to a dedicated project team, choose an engagement model that fits your stage of growth.',
  ],
  [
    'Clear communication. Shared goals.',
    'Work with a partner who values transparent communication, collaborative delivery, and long-term relationships.',
  ],
  [
    'Technology and talent, together',
    'Bring software engineering, enterprise consulting, and workforce expertise into one coordinated partnership.',
  ],
];

export const values = [
  'Integrity',
  'Excellence',
  'Innovation',
  'Customer success',
  'Collaboration',
  'Continuous learning',
  'Accountability',
];
