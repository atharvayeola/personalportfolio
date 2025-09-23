const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://atharvayeola.github.io',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Atharva Yeola',
  role: 'Machine Learning Data Scientist',
  description: [
    '→ A data scientist with expertise in analytics, decision science, machine learning, and LLMs.',
    '<a href=https://www.johnwayers.com/" target="_blank" rel="noopener noreferrer">Dr. John Ayers</a> (his PI at <a href="https://ucsd.edu" target="_blank" rel="noopener noreferrer">UCSD</a>) quotes:',
    '→ "Atharva is a Masters student at UCSD but easily mistaken for a senior PhD fellow.',
    '→ He is a wonderful addition to our innovation ecosystem at <a href="https://qi.ucsd.edu/" target="_blank" rel="noopener noreferrer">Qualcomm Institute (QI)</a>, bridging science and practice!',
    '→ In less than a year, Atharva published a study in <a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2830019" target="_blank" rel="noopener noreferrer">JAMA Internal Medicine</a> (4% acceptance rate), gaining significant media attention.',
    'His work has been featured in several prominent media outlets, including:',
    '<ul>',
    '<li><a href="https://nypost.com/2025/02/18/sports/gambling-addiction-soaring-since-legalization-of-sports-betting-in-most-us-states/" target="_blank" rel="noopener noreferrer">New York Post</a></li>',
    '<li><a href="https://www.cbsnews.com/news/gambling-addiction-online-search-surge-sports-betting/" target="_blank" rel="noopener noreferrer">CBS News</a></li>',
    '<li><a href="https://www.nbcnews.com/health/health-news/online-searches-gambling-addiction-surge-legalized-sports-betting-expa-rcna192462" target="_blank" rel="noopener noreferrer">NBC News</a></li>',
    '<li><a href="https://www.npr.org/sections/shots-health-news/2025/02/18/nx-s1-5299943/as-sports-betting-has-soared-more-people-search-online-for-help-with-gambling-addiction" target="_blank" rel="noopener noreferrer">NPR</a></li>',
    '</ul>',
    '→ <a href="https://hivtrends.org" target="_blank" rel="noopener noreferrer">HIVTrends.org</a>—a collaboration of <a href="https://cfar.ucsd.edu" target="_blank" rel="noopener noreferrer">CFAR</a>, <a href="https://www.jhu.edu/" target="_blank" rel="noopener noreferrer">JHU</a>, <a href="https://qi.ucsd.edu" target="_blank" rel="noopener noreferrer">QI</a>, and <a href="https://actri.ucsd.edu" target="_blank" rel="noopener noreferrer">ACTRI</a>—was made possible through his key contributions."'
  ],
  // Changed from single resume to multiple resumes
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

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up

  {
    name: 'End2End Text Summarizer',
    description:
      'Built a text summarizer for concise summaries, managing the entire workflow from configuration to deployment. Automated CI/CD with AWS and GitHub Actions, handling Docker, EC2, ECR, and runner setup.',
    stack: ['Transformers, NLP, GitHub Actions'],
    sourceCode: 'https://github.com/atharvayeola/text-summarizer',
    livePreview: 'https://github.com/atharvayeola/text-summarizer',
  },
  {
    name: 'Retail Vision Enhancement',
    description:
      'Implemented YOLOv8 for object detection, achieving over 90% accuracy in labeling on-shelf retail products. Utilized SuperGlue for precise product identification, ensuring accurate differentiation between similar items. Additionally, a Dockerfile was created to guarantee cross-platform reproducibility, simplifying deployment and setup.',
    stack: ['yoloV8', 'SuperGlue', 'Docker'],
    sourceCode: 'https://github.com/atharvayeola/retail-vision-enhancement',
    livePreview: 'https://github.com/atharvayeola/retail-vision-enhancement/blob/main/results/bounding_box_detection.jpg',
  },
 
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
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
];


const blogposts = [
  {
    title: 'Optimizing Neural Networks: Pruning and Quantization Techniques',
    description: 'This blog covers advanced techniques to optimize neural networks, focusing on pruning and quantization. Learn how these methods can reduce model complexity and improve performance.',
    date: 'August 10, 2024',
    link: 'https://medium.com/@yeola-atharva/optimizing-neural-networks-pruning-and-quantization-techniques-ffd6e5b644e7',
    type: 'latest', // Adding a type to differentiate between the latest and most popular blogs
  },
  {
    title: 'A Beginner\'s Guide to PyTorch: Building Your First Neural Network',
    description: 'An introductory guide for beginners to PyTorch. This blog walks you through building your first neural network, making it perfect for those new to deep learning.',
    date: 'July 25, 2024',
    link: 'https://medium.com/@yeola-atharva/a-beginners-guide-to-pytorch-building-your-first-neural-network-abf8e02511ed',
    type: 'popular', // Adding a type to differentiate between the latest and most popular blogs
  },
]


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'atharvayeola12@gmail.com',
}

export { header, about, projects, skills, news, blogposts, contact }