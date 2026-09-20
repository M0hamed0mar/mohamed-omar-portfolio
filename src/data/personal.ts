export const personal = {
  name: 'Mohamed Omar',
  shortName: 'Mohamed',
  initials: 'MO',
  role: 'AI Engineer',
  tagline: 'Engineering AI systems that work in production',
  subtitle: 'From data pipelines to LLM deployment - I build end-to-end systems and ship them.',
  bio: 'AI Engineer building LLM systems that work in production - with measurable results. Specialized in RAG pipelines, multi-agent architectures, and cloud-native AI deployment.',
  email: 'mohamad.omar.eng@gmail.com',
  phone: '+201092284564',
  location: 'Egypt',
  availability: 'Available for opportunities',
  socials: {
    github: 'https://github.com/M0hamed0mar',
    linkedin: 'https://linkedin.com/in/mohamed-omar-eng',
    whatsapp: 'https://wa.me/201092284564',
  },
  cvPath: '/cv/Mohamed_Omar_CV.pdf',
  profileImage: '/images/profile/profile.webp',
  logoDark: '/images/logos/brand/logo-dark.webp',
  logoLight: '/images/logos/brand/logo-light.webp',
  cards: [
    {
      value: '40+',
      label: 'Students Taught',
      description: 'AI Engineering diploma, from Python to agent architectures.',
    },
    {
      value: 'Production',
      label: 'Systems',
      description: 'Delivered end-to-end, from data pipelines to deployed services.',
    },
    {
      value: 'AI',
      label: 'Full Lifecycle',
      description: 'From classical ML and analytics to retrieval and agent systems.',
    },
  ],
} as const;

export type Personal = typeof personal;
