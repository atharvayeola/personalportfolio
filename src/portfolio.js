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
  resume: 'https://drive.google.com/file/d/1e7CcXW5GO7712bNG8PPjHLff_fb1wP_g/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/atharvayeola',
    github: 'https://github.com/atharvayeola',
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

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'atharvayeola12@gmail.com',
}

export { header, about, projects, skills, contact }
