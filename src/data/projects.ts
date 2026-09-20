export type ProjectCategory = 'RAG' | 'Agents' | 'ML' | 'Full-Stack';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  featured: boolean;
  year: string;
  role: string;
  duration?: string;
  techStack: string[];
  metrics: ProjectMetric[];
  architectureImage: string;
  benchmarkImage?: string;
  coverImage: string;
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: 'food-safety-rag',
    title: 'Food Safety RAG System',
    subtitle: 'Production-grade RAG for regulatory compliance',
    description:
      'A domain-specific RAG system answering complex food safety compliance queries with full citations and near-zero hallucination.',
    longDescription:
      'Designed and delivered as a paid freelance engagement for food safety compliance. The system answers complex regulatory and risk queries using the CFIA Reference Database, with hybrid retrieval, cross-encoder reranking, and deterministic citation support.',
    category: 'RAG',
    featured: true,
    year: '2026',
    role: 'Freelance AI Engineer',
    duration: '3-week engagement',
    techStack: [
      'Python',
      'LangChain',
      'FAISS',
      'BM25',
      'Cross-Encoder Reranking',
      'FastAPI',
      'Docker',
      'AWS ECS',
      'AWS ECR',
    ],
    metrics: [
      { label: 'Token F1', value: '+84%' },
      { label: 'MRR', value: '+70%' },
      { label: 'Tables Extracted', value: '179' },
    ],
    architectureImage: '/images/projects/food-safety-rag/architecture.webp',
    benchmarkImage: '/images/projects/food-safety-rag/benchmark.webp',
    coverImage: '/images/projects/food-safety-rag/cover.webp',
    githubUrl: 'https://github.com/M0hamed0mar/food-safety-rag',
    highlights: [
      'Hybrid retrieval (FAISS + BM25 with RRF fusion)',
      'Cross-Encoder reranking with bge-reranker-v2-m3',
      'Table-aware extraction: 179 structured tables as first-class entities',
      'Per-page semantic chunking for accurate page tracking',
      'Deterministic citations with document, page, and section',
      'Deployed on AWS ECS Fargate with Dockerized FastAPI backend',
    ],
  },
  {
    slug: 'adaptive-learning-agent',
    title: 'Adaptive Learning Agent',
    subtitle: 'Multi-agent adaptive learning platform',
    description:
      'A multi-agent system generating personalized educational roadmaps from a single free-form learning goal, with critique-and-refinement loops.',
    longDescription:
      'Built with LangGraph, this system orchestrates 8 specialized LLM agents to produce tailored curricula. It uses critique-and-improvement loops for roadmap quality, lazy lesson generation, and interactive tutor chat with web search integration.',
    category: 'Agents',
    featured: true,
    year: '2026',
    role: 'Founder and Lead Engineer',
    techStack: [
      'Python',
      'FastAPI',
      'LangGraph',
      'LLM Agents',
      'Tavily Search',
      'SQLAlchemy 2.0',
      'Alembic',
      'Docker',
      'AWS ECS',
      'AWS ALB',
    ],
    metrics: [
      { label: 'Specialized Agents', value: '8' },
      { label: 'Critique Loops', value: '2' },
      { label: 'Deployment', value: 'AWS' },
    ],
    architectureImage: '/images/projects/adaptive-learning-agent/architecture.webp',
    coverImage: '/images/projects/adaptive-learning-agent/cover.webp',
    githubUrl: 'https://github.com/M0hamed0mar/adaptive-learning-agent',
    highlights: [
      'Pipeline of 8 specialized LLM agents orchestrated with LangGraph',
      'Bounded critique-and-refinement loops for roadmap and briefs',
      'Lazy lesson generation to minimize latency and cost',
      'Interactive tutor chat with optional web search via function calling',
      'Full persistence with SQLAlchemy 2.0 (async) and Alembic migrations',
      'Server-rendered UI with FastAPI, Jinja2, HTMX, and Tailwind CSS',
      'Deployed end-to-end on AWS ECS Fargate with Application Load Balancer',
    ],
  },
  {
    slug: 'multi-agent-rag-assistant',
    title: 'Multi-Agent RAG Assistant',
    subtitle: 'Agentic RAG with routing and reflection',
    description:
      'A production-ready agentic RAG system with intelligent routing, multi-step reasoning, tool calling, self-reflection, and memory-aware conversations.',
    longDescription:
      'Built with LangGraph and FastAPI, this system routes queries intelligently across RAG, reasoning, tool usage, and chat workflows. It features dynamic tool-calling agents (calculator, Python executor, web search) with self-reflection and persistent conversation memory.',
    category: 'Agents',
    featured: true,
    year: '2026',
    role: 'Solo Engineer',
    techStack: [
      'Python',
      'FastAPI',
      'LangGraph',
      'Groq LLM',
      'ChromaDB',
      'SQLite',
      'Docker',
      'AWS ECS',
      'AWS ECR',
      'AWS ALB',
    ],
    metrics: [
      { label: 'Workflow Types', value: '4' },
      { label: 'Tools Available', value: '3' },
      { label: 'Streaming', value: 'SSE' },
    ],
    architectureImage: '/images/projects/multi-agent-rag-assistant/architecture.webp',
    coverImage: '/images/projects/multi-agent-rag-assistant/cover.webp',
    githubUrl: 'https://github.com/M0hamed0mar/multi-agent-rag-assistant',
    highlights: [
      'Intelligent query routing across RAG, reasoning, tools, and chat',
      'Multi-step reasoning workflows with reflection and validation',
      'Dynamic tool-calling: calculator, Python executor, web search',
      'Persistent conversation memory via SQLite',
      'Real-time streaming responses via Server-Sent Events',
      'Modular FastAPI backend with Dockerized deployment on AWS',
    ],
  },
  {
    slug: 'hybrid-rag-engine',
    title: 'Hybrid RAG Engine',
    subtitle: 'Multi-format RAG over private documents',
    description:
      'A production-ready RAG engine for intelligent Q&A over multi-format user documents, with hybrid search, reranking, and intent-based routing.',
    longDescription:
      'Supports PDF, DOCX, PPTX, images (via OCR), and web pages. Implements hybrid search (FAISS + BM25) with RRF fusion, multi-query expansion, cross-encoder reranking, and intent-based query routing. Built with FastAPI and deployed with Docker.',
    category: 'RAG',
    featured: true,
    year: '2026',
    role: 'Solo Engineer',
    techStack: [
      'Python',
      'LangChain',
      'FAISS',
      'BM25',
      'Tesseract OCR',
      'FastAPI',
      'Docker',
      'Google Gemini',
    ],
    metrics: [
      { label: 'Formats Supported', value: '6' },
      { label: 'Query Intents', value: '4' },
      { label: 'Caching', value: 'Enabled' },
    ],
    architectureImage: '/images/projects/hybrid-rag-engine/architecture.webp',
    coverImage: '/images/projects/hybrid-rag-engine/cover.webp',
    githubUrl: 'https://github.com/M0hamed0mar/hybrid-rag-engine',
    highlights: [
      'Hybrid retrieval: FAISS dense + BM25 sparse with RRF fusion',
      'Multi-query expansion and cross-encoder reranking',
      'Intent-based routing: factual, summary, reasoning, table',
      'Multi-format ingestion: PDF, DOCX, PPTX, images, web URLs',
      'Response caching with diskcache for repeated queries',
      'Dockerized deployment optimized for CPU inference',
    ],
  },
  {
    slug: 'rossmann-sales-forecasting',
    title: 'Rossmann Sales Forecasting',
    subtitle: 'End-to-end ML pipeline for retail forecasting',
    description:
      'An end-to-end machine learning project predicting daily sales for 1,115 drug stores across Germany, from raw data to production web app.',
    longDescription:
      'A complete data science pipeline demonstrating the full ML lifecycle: EDA, feature engineering with PCA and RobustScaler, XGBoost tuned via RandomizedSearchCV, and a Flask web app for real-time predictions with retraining capability.',
    category: 'ML',
    featured: false,
    year: '2025',
    role: 'Data Scientist',
    techStack: [
      'Python',
      'Scikit-learn',
      'XGBoost',
      'PCA',
      'Plotly',
      'Flask',
      'MLflow',
      'Docker',
      'AWS ECS',
      'AWS ECR',
    ],
    metrics: [
      { label: 'R2 Score', value: '0.97' },
      { label: 'MAE', value: '307' },
      { label: 'Stores', value: '1,115' },
    ],
    architectureImage: '/images/projects/rossmann-sales-forecasting/architecture.webp',
    benchmarkImage: '/images/projects/rossmann-sales-forecasting/benchmark.webp',
    coverImage: '/images/projects/rossmann-sales-forecasting/cover.webp',
    githubUrl: 'https://github.com/M0hamed0mar/rossmann-sales-forecasting',
    highlights: [
      'XGBoost tuned via RandomizedSearchCV with R2 = 0.97 on test set',
      'Feature engineering with PCA and RobustScaler for outlier resistance',
      'Interactive Plotly dashboards for exploratory data analysis',
      'Flask web app for single-store and batch predictions',
      'Model retraining interface triggered from the browser',
      'Multi-stage Dockerfile with Gunicorn for production deployment',
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;
export const projectCategories = ['All', 'RAG', 'Agents', 'ML'] as const;

