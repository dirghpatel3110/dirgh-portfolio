import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Dirgh Patel',
  title: "Hi all, I'm Dirgh",
  description:
    "A passionate software developer, your fellow coder, and a proud tech geek. Let's chat about all things tech and explore the latest innovations together. Keep scrolling to discover more about me.",
  resumeLink:
    'https://drive.google.com/file/d/1Gt94eLUaViYrR4LjlE4RtJNO2bQUYcRx/view',
};

export const openSource = {
  githubUserName: 'dirghpatel3110',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: '',
  linkedin: 'https://www.linkedin.com/in/dirgh3110/',
  github: 'https://github.com/dirghpatel3110/',
  gmail: 'dirgh310@gmail.com'
};

export const skillsSection: SkillsSectionType = {
  title: 'WHAT I DO',
  subTitle: 'SOFTWARE DEVELOPER WHO LOVES TECH',
  data: [
    {
      title: 'Full Stack Developer',
      lottieAnimationFile: './lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building RESTful APIs in NodeJs Framework'),
        emoji('⚡ Building responsive websites using React.js'),
        emoji('⚡ Working with Continuous Integration and Deployment (CI/CD) Pipelines'),
        emoji('⚡ Handling Data Validation, Sanitization, and Error Handling Effectively'),
        
      ],
      softwareSkills: [
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          iconifyTag: 'logos:typescript-icon',
        },
        {
          skillName: 'React',
          iconifyTag: 'logos:react',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Java',
          iconifyTag: 'logos:java',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'CPP',
          iconifyTag: 'mdi:language-cpp',
        },
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'MaterialUI',
          iconifyTag: 'logos:material-ui',
        },
        {
          skillName: 'Mongo',
          iconifyTag: 'devicon:mongodb-wordmark',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: './lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Sql',
          iconifyTag: 'logos:mysql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'TypeScript|JavaScript (ReactJs)', 
    progressPercentage: '90', 
  },
  {
    Stack: 'Python (Django, Flask, Numpy, Pandas)',
    progressPercentage: '85',
  },
  {
    Stack: 'C++',
    progressPercentage: '75',
  },
  {
    Stack: 'AWS (EC2, ES, S3, SQS, Lambda, SNS)',
    progressPercentage: '80',
  },
  {
    Stack: 'Database (MongoDB, MySQL, Postgres)',
    progressPercentage: '85',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Illinois Institute of Technology',
    subHeader: 'Master in Computer Science',
    duration: 'August 2022 - Present',
    desc: '',
    companyLogo: './img/icons/common/iitlogo.png',
    descBullets: [
    ],
  },
  {
    schoolName: 'Dharmsinh Desai Univeristy',
    subHeader: 'Bachelors of Technology in Computer Engineering',
    duration: 'July 2019 - May 2023',
    companyLogo: './img/icons/common/ddulogo.png',
    desc: '',
    descBullets: [],
  },

  
];

export const experience: ExperienceType[] = [
  {
    role: 'Research Intern',
    company: 'Institute for Plasma Research',
    companyLogo: './img/icons/common/ipr-logo.png',
    date: 'Dec 2022 – Mar 2023',
    desc: 'Prototype implementation for centralized and federated Identity to provide authentication and authorization for web based applications.Worked on various platform such as Key cloak, ADFS, AD and on SAML 2.0 protocols.Worked with MERN to build frontend and backend part of our applications.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'The Special Character',
    companyLogo: './img/icons/common/tsc-logo.jpeg',
    date: 'May 2022 – Nov 2023',
    desc: 'Optimized backend APIs by applying response compression and handled SQL caching to reduce database costs by 40%. Migrated the existing API to a different service, performed API testing, and deprecated the old service. Wrote efficient aggregation pipelines using Mongoose',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Online retailer platform',
    companyLogo: './img/icons/common/ECommerce-logo.png',
    desc: 'Built a MERN stack e-commerce platform with category-based shopping, order tracking, and cancellations. Integrated Elasticsearch within Docker for semantic search, improving accuracy. Developed an AI-driven ticketing system using OpenAI and base64 image processing for defect analysis. Implemented role-based access control for Store Managers, Salesmen, and Customers, enabling CRUD operations and AI-powered product generation. Also created a Rasa CALM chatbot for seamless order management and support via chat.',
    github: 'https://github.com/dirghpatel3110/ShopEase',
  },
  {
    name: 'EliteCare - Health Assistant',
    companyLogo: './img/icons/common/covid19.jpg',
    desc: 'Developed an AI-powered healthcare and order management assistant using React.js, Node.js, Rasa AI, and MongoDB. It provides personalized medication recommendations, dosage guidance, and side-effect analysis, along with drug interaction safety checks. Implemented Rasa NLU for fraud detection using OCR, enabling automated refund and replacement decisions based on user verification. Designed a conversational AI with advanced NLU and dialogue management, enhancing user experience and efficiency.',
    github: 'https://github.com/dirghpatel3110/Health-Assistant',
  },
  {
    name: 'Fashion-Fuel',
    companyLogo: './img/icons/common/cloth-logo.png',
    desc: 'Developed a dynamic Clothing website with a functionality that allows users to browse clothing products by categories such as women, men, and kids. Leveraged MongoDB and Express.js for data management, enabling seamless CRUD operations. Implemented features for adding and removing products from the cart, and created an admin panel for efficient product management',
    github: 'https://github.com/dirghpatel3110/Fashion-Fuel',
  },
  {
    name: 'Insta Reels',
    companyLogo: './img/icons/common/Instagram-logo.webp',
    desc: 'Created a web application inspired by TikTok and Instagram Reels, allowing users to scroll through short videos with the ability to perform CRUD operations. Utilized Firebase for backend management and implemented the  Intersection Observer API to track scroll percentages and dynamically determine which video should play based on user interaction.',
    github: 'https://github.com/dirghpatel3110/SDP-Project',
  },
];

// option to hide or show the ContactUs component
// export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Dirgh Patel',
  description:
    'A passionate Software Developer.',
  author: 'Dirgh Patel',
  keywords: [
    'Dirgh',
    'Dirgh Patel',
    '@dirghpatel3110',
    'dirghpatel3110',
    'Portfolio',
    'Dirgh Portfolio',
    'Dirgh Patel Portfolio',
  ],
};
