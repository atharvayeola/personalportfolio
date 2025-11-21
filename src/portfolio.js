const header = {
  homepage: 'https://atharvayeola.github.io',
  title: '',
}

const about = {
  name: 'Atharva Yeola',
  role: 'Machine Learning Data Scientist',
  description: [
    'A data scientist with expertise in analytics, decision science, machine learning, and LLMs.',
    'Published researcher in JAMA Internal Medicine with work featured in NPR, CBS, NBC, and New York Post.',
  ],
  resumes: [
    {
      role: 'Data Scientist',
      path: '/resume-data-scientist.pdf'
    },
    {
      role: 'AI/ML and Applied Scientist',
      path: '/resume-ml-scientist.pdf'
    },
    {
      role: 'Data Engineer',
      path: '/resume-data-engineer.pdf'
    },
    {
      role: 'Data Analyst',
      path: '/resume-data-analyst.pdf'
    }
  ],
  social: {
    linkedin: 'https://linkedin.com/in/atharvayeola',
    github: 'https://github.com/atharvayeola',
    medium: 'https://medium.com/@yeola-atharva',
  },
}

// Role definitions for interactive selection
const roles = [
  {
    id: 'analytics-engineer',
    title: 'Analytics Engineer / Data Engineer',
    resume: '/resume-data-engineer.pdf',
    icon: '🔧',
    description: 'Building robust data pipelines and scalable infrastructure',
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    resume: '/resume-data-scientist.pdf',
    icon: '🔬',
    description: 'Creating ML models and driving insights from data',
  },
  {
    id: 'aiml-engineer',
    title: 'AI/ML Engineer',
    resume: '/resume-ml-scientist.pdf',
    icon: '🤖',
    description: 'Deploying production ML systems and intelligent agents',
  },
  {
    id: 'data-analyst',
    title: 'Data / Product Analyst',
    resume: '/resume-data-analyst.pdf',
    icon: '📊',
    description: 'Uncovering business insights through analytics and visualization',
  },
]

// All projects with comprehensive details
const allProjects = [
  {
    id: 'medisyn-vision',
    name: 'MediSynVision',
    description: 'Medical imaging synthesis platform leveraging Stable Diffusion to generate synthetic medical imagery from natural language prompts. Features FastAPI backend with GPU acceleration and premium React frontend.',
    stack: ['Python', 'FastAPI', 'Stable Diffusion', 'React', 'MPS/CUDA'],
    sourceCode: 'https://github.com/atharvayeola/MediSynVision',
    featured: true,
  },
  {
    id: 'text2sql-agent',
    name: 'Text2SQL Agent',
    description: 'Production-ready SQL generation agent with dual LLM support (GPT-4 and local T5), enterprise security (SELECT-only), interactive schema visualization, and beautiful React UI powered by DuckDB.',
    stack: ['Python', 'OpenAI', 'T5', 'DuckDB', 'React', 'FastAPI'],
    sourceCode: 'https://github.com/atharvayeola/text2sql_agent',
    featured: true,
  },
  {
    id: 'model-eval-agent',
    name: 'Model Evaluation Agent',
    description: 'Modular evaluation framework with glassmorphic dashboard for orchestrating datasets, model adapters, and metrics. Features run history management and real-world dataset integration.',
    stack: ['Python', 'React', 'SQLite', 'Vite'],
    sourceCode: 'https://github.com/atharvayeola/model_eval_agent',
  },
  {
    id: 'ecommerce-agent',
    name: 'E-Commerce Agent',
    description: 'Intelligent shopping agent using LangChain/LangGraph RAG pipeline with SentenceTransformer embeddings, image analysis via ViT, web enrichment, and Next.js chat interface.',
    stack: ['Python', 'LangChain', 'LangGraph', 'ViT', 'Next.js', 'FastAPI'],
    sourceCode: 'https://github.com/atharvayeola/e-commerce_agent',
    featured: true,
  },
  {
    id: 'network-analytics',
    name: 'Network Analytics',
    description: 'End-to-end analytics pipeline processing 12K+ synthetic network telemetry records. Features Plotly dashboards, latency statistics, reliability KPIs, and bottleneck detection.',
    stack: ['Python', 'Pandas', 'Plotly', 'Statistical Analysis'],
    sourceCode: 'https://github.com/atharvayeola/network-analytics',
  },
  {
    id: 'fintrack',
    name: 'FinTrack Real-Time Dashboard',
    description: 'Real-time financial portfolio dashboard with WebSocket streaming, React + TypeScript frontend, Node.js backend, and AWS ECS Fargate deployment with auto-scaling.',
    stack: ['React', 'TypeScript', 'Node.js', 'WebSocket', 'AWS ECS'],
    sourceCode: 'https://github.com/atharvayeola/FinTrack',
    featured: true,
  },
  {
    id: 'text-summarizer',
    name: 'Text Summarizer',
    description: 'End-to-end abstractive summarization system with config-driven datasets, Optuna hyperparameter tuning, FastAPI async service, and complete AWS CI/CD pipeline with GitHub Actions.',
    stack: ['Transformers', 'NLP', 'FastAPI', 'Optuna', 'AWS', 'GitHub Actions'],
    sourceCode: 'https://github.com/atharvayeola/text-summarizer',
  },
  {
    id: 'book-review-api',
    name: 'Book Review API',
    description: 'RESTful API for managing book reviews with comprehensive CRUD operations, built with modern backend best practices.',
    stack: ['Python', 'FastAPI', 'REST API'],
    sourceCode: 'https://github.com/atharvayeola/book-review-API',
  },
  {
    id: 'smart-route-optimizer',
    name: 'Smart Route Optimizer',
    description: 'Advanced vehicle routing problem solver featuring distributed VRP with Dask clusters, K-Means clustering, ETA prediction via PyTorch MLP with ONNX export and INT8 quantization.',
    stack: ['Python', 'Google OR-Tools', 'Dask', 'PyTorch', 'ONNX'],
    sourceCode: 'https://github.com/atharvayeola/Smart-Route-Optimizer',
  },
  {
    id: 'superstore-analytics',
    name: 'Superstore Analytics Pipeline',
    description: 'Medallion architecture data pipeline (Bronze/Silver/Gold) with star schema warehouse, feature engineering, and interactive Dash dashboard for business metrics.',
    stack: ['Python', 'Pandas', 'SQLite', 'Dash', 'ETL'],
    sourceCode: 'https://github.com/atharvayeola/superstore-analytics-pipeline',
    featured: true,
  },
  {
    id: 'ecommerce-funnel',
    name: 'E-Commerce Funnel Analysis',
    description: 'Large-scale clickstream analysis using PySpark to identify user drop-offs through the purchase funnel (view → cart → purchase) with Plotly visualizations.',
    stack: ['PySpark', 'Plotly', 'Clickstream Analysis'],
    sourceCode: 'https://github.com/atharvayeola/ecommerce-funnel-analysis',
  },
  {
    id: 'social-media-insights',
    name: 'Social Media Engagement Insights',
    description: 'Analytics platform for measuring and optimizing social media engagement metrics across multiple platforms.',
    stack: ['Python', 'Data Analytics', 'Visualization'],
    sourceCode: 'https://github.com/atharvayeola/social-media_engagement-insights',
  },
  {
    id: 'marketing-dashboard',
    name: 'Marketing Campaign Dashboard',
    description: 'Interactive Dash application analyzing marketing campaign performance, audience segmentation, channel effectiveness, and geographical insights.',
    stack: ['Python', 'Dash', 'Plotly', 'Analytics'],
    sourceCode: 'https://github.com/atharvayeola/marketing-campaign-dashboard',
  },
  {
    id: 'retail-vision',
    name: 'Retail Vision Enhancement',
    description: 'Computer vision pipeline achieving 90%+ accuracy in retail product detection using YOLOv8, with SuperGlue for precise product identification and Docker for cross-platform deployment.',
    stack: ['YOLOv8', 'SuperGlue', 'Computer Vision', 'Docker'],
    sourceCode: 'https://github.com/atharvayeola/retail-vision-enhancement',
  },
]

// Project mappings by role
const projectsByRole = {
  'analytics-engineer': [
    'superstore-analytics',
    'network-analytics',
    'fintrack',
    'text-summarizer',
    'smart-route-optimizer',
  ],
  'data-scientist': [
    'medisyn-vision',
    'text-summarizer',
    'model-eval-agent',
    'text2sql-agent',
    'network-analytics',
    'smart-route-optimizer',
  ],
  'aiml-engineer': [
    'text2sql-agent',
    'ecommerce-agent',
    'model-eval-agent',
    'medisyn-vision',
    'text-summarizer',
    'retail-vision',
  ],
  'data-analyst': [
    'ecommerce-funnel',
    'marketing-dashboard',
    'social-media-insights',
    'superstore-analytics',
    'fintrack',
    'network-analytics',
  ],
}

const skills = [
  'Python', 'SQL', 'Spark', 'AWS', 'Docker', 'LLMs', 'PyTorch'
]

const news = [
  {
    title: 'Original Investigation in JAMA Internal Medicine',
    description: {
      text: 'Our study titled "Growing Health Concern Regarding Gambling Addiction in the Age of Sportsbooks" was published in JAMA Internal Medicine. This research examines the association between the legalization of sports betting in the U.S. and the increase in gambling addiction help-seeking behaviors.',
      link: {
        url: 'https://jamanetwork.com/journals/jamainternalmedicine/article-abstract/2830019',
        text: 'Growing Health Concern Regarding Gambling Addiction in the Age of Sportsbooks',
      },
    },
    date: 'February 17, 2025',
  },
  {
    title: 'Launch of HIVTrends.org',
    description: {
      text: 'Collaborated on the development of HIVTrends.org, a platform providing public, real-time, and validated HIV testing sales trends from search query surveillance. This project aims to enhance public health monitoring and response strategies.',
      link: {
        url: 'https://hivtrends.org',
        text: 'HIVTrends.org',
      },
    },
    date: 'December 20, 2024',
  },
  {
    title: 'Research Study at IEEE Xplore (CVMI 2024)',
    description: {
      text: 'Our paper titled "Enhancing Traffic Sign Recognition: A Deep Learning Approach for Occluded Environments" was published in IEEE Xplore and presented at the 3rd IEEE CVMI 2024 conference.',
      link: {
        url: 'https://ieeexplore.ieee.org/document/10782104',
        text: 'Enhancing Traffic Sign Recognition: A Deep Learning Approach for Occluded Environments',
      },
    },
    date: 'December 11, 2024',
  },
]

const blogposts = [
  {
    title: 'Optimizing Neural Networks: Pruning and Quantization Techniques',
    description: 'This blog covers advanced techniques to optimize neural networks, focusing on pruning and quantization. Learn how these methods can reduce model complexity and improve performance.',
    date: 'August 10, 2024',
    link: 'https://medium.com/@yeola-atharva/optimizing-neural-networks-pruning-and-quantization-techniques-ffd6e5b644e7',
    type: 'latest',
  },
  {
    title: 'A Beginner\'s Guide to PyTorch: Building Your First Neural Network',
    description: 'An introductory guide for beginners to PyTorch. This blog walks you through building your first neural network, making it perfect for those new to deep learning.',
    date: 'July 25, 2024',
    link: 'https://medium.com/@yeola-atharva/a-beginners-guide-to-pytorch-building-your-first-neural-network-abf8e02511ed',
    type: 'popular',
  },
]

const contact = {
  email: 'atharvayeola12@gmail.com',
}

export { header, about, roles, allProjects, projectsByRole, skills, news, blogposts, contact }