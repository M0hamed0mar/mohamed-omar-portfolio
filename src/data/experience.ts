export interface Experience {
  role: string;
  company: string;
  location?: string;
  duration: string;
  current?: boolean;
  description: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Freelance AI Engineer',
    company: 'Client Project',
    duration: 'May 2026',
    description:
      'Designed and delivered a production-grade RAG system for food safety compliance.',
    bullets: [
      'Built hybrid retrieval (FAISS + BM25 with RRF fusion) and cross-encoder reranking.',
      'Achieved +84% Token F1 and +70% MRR over baseline through a reproducible evaluation benchmark.',
      'Deployed on AWS ECS Fargate with a Dockerized FastAPI backend.',
    ],
  },
  {
    role: 'Lead AI Instructor and Founder',
    company: 'NeuroStack',
    duration: '2026 - Present',
    current: true,
    description:
      'Founded an online AI academy delivering a full AI Engineering diploma.',
    bullets: [
      'Designed the complete curriculum: Python, ML, Deep Learning, NLP, LLMs, RAG, AI Agents, and MLOps.',
      'Positioned the program around practical, deployable AI projects that bridge theory with real engineering.',
    ],
  },
  {
    role: 'AI Engineering Instructor',
    company: 'Quarter Academy and T-Square',
    location: 'Mansoura, Egypt',
    duration: '2024 - Present',
    current: true,
    description:
      'Delivered a comprehensive AI engineering curriculum to 40+ students per cohort.',
    bullets: [
      'Taught structured diploma covering Python, ML, DL, CV, NLP, LLMs, and AI Agents (LangChain, LangGraph).',
      'Achieved high completion rates through project-based learning.',
    ],
  },
  {
    role: 'AI Trainee',
    company: 'NTI - Huawei AI Scholarship',
    duration: 'Aug 2025 - Sep 2025',
    description:
      'Specialized in advanced deep learning: computer vision, time series, and generative models.',
    bullets: [
      'Worked with TensorFlow, Keras, CNNs, RNNs, and GANs.',
      'Built an AutoML graduation project covering end-to-end pipelines.',
    ],
  },
  {
    role: 'Django Full Stack Intern',
    company: 'Information Technology Institute (ITI)',
    duration: 'Jul 2025 - Aug 2025',
    description:
      'Built and deployed full-stack web applications using Django.',
    bullets: [
      'Covered backend development and frontend integration.',
    ],
  },
  {
    role: 'Data Scientist Trainee',
    company: 'Pioneers of Digital Egypt - IBM Program',
    duration: 'Dec 2024 - May 2025',
    description:
      'Implemented end-to-end ML solutions including predictive modeling and MLOps.',
    bullets: [
      'Worked with Python, Scikit-learn, and MLflow on real-world datasets.',
      'Part of the IBM-backed DEPI national AI program.',
    ],
  },
];
