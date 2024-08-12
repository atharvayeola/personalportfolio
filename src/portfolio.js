const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://atharvayeola.github.io',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Atharva Yeola',
  role: 'Machine Learning Engineer',
  description:
    'A software engineer with expertise in machine learning, computer vision and LLMs. Prof. Bintu (his PI @UCSD) quotes "Atharva is proficient in Python and PyTorch, with experience in writing advanced machine learning algorithms and designing data processing pipelines." His manager @Rhythmflows Solutions Pvt. Ltd says - "Atharva has demonstrated success in understanding business needs, managing complex projects, and enhancing model performance with cutting-edge techniques." Mr Mokashi (Director @Atomic Loops) mentions: "Atharva has proven ability to lead teams and collaborate effectively in high-impact projects."',
  resume: '/resume.pdf',
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
  'Python', 'Computer Vision', 'LLMs', 'SQL', 'Pytorch', 'TensorFlow', 'PySpark', 'AWS', 'Docker'
]

const news = [
  {
    title: 'Paper Accepted at IEEE CVMI 2024 Conference',
    description: {
      text: 'My paper titled "A Deep Learning-based Study on Occluded Traffic Signs" (ID 552) was accepted at the 3rd IEEE CVMI 2024 conference. The conference will be held on October 19-20, 2024, in Prayagraj, India. This paper elaborates on innovative approaches to interpreting traffic signs that are partially or fully occluded, a challenge in the field of computer vision.',
      link: {
        url: 'https://cvmi2024.iiita.ac.in/AcceptedPapers.php',
        text: 'A Deep Learning-based Study on Occluded Traffic Signs',
      },
    },
    date: 'August 1, 2024',
  },
]

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
