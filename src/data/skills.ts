export type SkillCategory = {
  title: string;
  description: string;
  icon: string;
  size: 'large' | 'medium' | 'small';
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'LLM and Agent Engineering',
    description: 'Building production systems on top of large language models.',
    icon: 'agents',
    size: 'large',
    skills: [
      'LangChain',
      'LangGraph',
      'RAG Systems',
      'AI Agents',
      'Prompt Engineering',
      'LLM APIs',
      'Hugging Face',
      'Fine-Tuning',
      'Vector Databases',
      'Semantic Search',
    ],
  },
  {
    title: 'Machine Learning and Data Science',
    description: 'Classical ML, statistical analysis, and MLOps.',
    icon: 'chart',
    size: 'medium',
    skills: [
      'Scikit-learn',
      'XGBoost',
      'LightGBM',
      'Pandas',
      'NumPy',
      'Feature Engineering',
      'Hyperparameter Tuning',
      'MLflow',
      'Plotly',
    ],
  },
  {
    title: 'Deep Learning and Computer Vision',
    description: 'Neural networks, transfer learning, and vision models.',
    icon: 'brain',
    size: 'medium',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'CNNs',
      'RNNs',
      'Transformers',
      'Vision Transformers',
      'Transfer Learning',
      'Object Detection',
    ],
  },
  {
    title: 'Cloud and DevOps',
    description: 'Containerized deployment and cloud infrastructure.',
    icon: 'cloud',
    size: 'medium',
    skills: [
      'AWS ECS',
      'AWS ECR',
      'AWS ALB',
      'AWS S3',
      'AWS Lambda',
      'Docker',
      'Docker Compose',
      'GitHub Actions',
      'Gunicorn',
    ],
  },
  {
    title: 'Backend and Databases',
    description: 'APIs, services, and data persistence layers.',
    icon: 'server',
    size: 'small',
    skills: [
      'FastAPI',
      'Flask',
      'Django',
      'REST APIs',
      'PostgreSQL',
      'SQLite',
      'ChromaDB',
      'FAISS',
    ],
  },
];

export const allSkills = skillCategories.flatMap((c) => c.skills);
