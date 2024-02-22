export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'GraphQL',
  'Docker',
  'Kubernetes',
  'AWS',
  'GCP',
  'Azure',
  'CI/CD'
];

export interface Position {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  skills: string[];
  responsibilities: string[];
  requirements: string[];
  todo: string[];
}

export const positions: Position[] = [
  {
    id: 1,
    title: 'Full Stack Developer',
    shortDescription:
      'Join our team as a Full Stack Developer and work on exciting projects using cutting-edge technologies!',
    description:
      "As a Full Stack Developer, you will be responsible for developing and maintaining web applications from front to back end. You will collaborate with cross-functional teams to design and implement solutions that meet our clients' needs.",
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js'],
    responsibilities: [
      'Developing user-friendly web interfaces using React.js',
      'Building scalable backend APIs using Node.js and Express.js',
      'Collaborating with UI/UX designers to implement design mockups',
      'Optimizing application performance for maximum speed and scalability',
      'Troubleshooting and debugging issues across the stack'
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      'Strong proficiency in JavaScript/TypeScript, React, and Node.js',
      'Experience with modern web development tools and frameworks',
      'Knowledge of RESTful APIs and GraphQL',
      'Ability to work in a fast-paced, collaborative environment'
    ],
    todo: [
      'Familiarize yourself with our existing codebase and development workflows',
      'Participate in team meetings and code reviews',
      'Contribute to the planning and estimation of development tasks',
      'Stay updated on industry trends and best practices in web development'
    ]
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    shortDescription:
      "We're seeking a talented DevOps Engineer to help streamline our development and deployment processes!",
    description:
      'As a DevOps Engineer, you will play a critical role in automating and optimizing our infrastructure and deployment pipelines. You will work closely with development and operations teams to ensure smooth and efficient delivery of software applications.',
    skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'CI/CD'],
    responsibilities: [
      'Implementing and maintaining CI/CD pipelines for automated testing and deployment',
      'Managing containerized applications using Docker and Kubernetes',
      'Configuring and maintaining cloud infrastructure on AWS, GCP, and Azure',
      'Monitoring system performance and ensuring high availability and scalability',
      'Troubleshooting infrastructure and deployment issues'
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      'Proficiency in containerization technologies such as Docker and Kubernetes',
      'Experience with cloud platforms like AWS, GCP, or Azure',
      'Strong understanding of CI/CD principles and tools',
      'Ability to script and automate tasks using languages like Bash, Python, or PowerShell'
    ],
    todo: [
      'Evaluate and improve existing CI/CD pipelines for efficiency and reliability',
      'Implement infrastructure as code using tools like Terraform or CloudFormation',
      'Collaborate with development teams to optimize application performance and scalability',
      'Stay current with emerging technologies and best practices in DevOps'
    ]
  },
  {
    id: 3,
    title: 'Frontend Developer',
    shortDescription:
      "We're looking for a Frontend Developer to join our team and help create intuitive and responsive user interfaces!",
    description:
      'As a Frontend Developer, you will collaborate with designers and backend developers to translate UI/UX designs into engaging web experiences. You will utilize your expertise in HTML, CSS, and JavaScript frameworks to build scalable and maintainable frontend solutions.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue.js'],
    responsibilities: [
      'Implementing responsive and accessible user interfaces using HTML, CSS, and JavaScript',
      'Collaborating with UI/UX designers to translate design mockups into code',
      'Optimizing frontend performance for speed and scalability',
      'Conducting code reviews and providing feedback to team members',
      'Staying updated on emerging frontend technologies and best practices'
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      'Proficiency in HTML, CSS, and JavaScript',
      'Experience with frontend frameworks such as React, Angular, or Vue.js',
      'Understanding of responsive design principles and cross-browser compatibility',
      'Strong problem-solving and communication skills'
    ],
    todo: [
      'Familiarize yourself with our design system and component library',
      'Collaborate with backend developers to integrate frontend and backend functionality',
      'Participate in sprint planning and estimation sessions',
      'Contribute to the continuous improvement of our frontend development processes'
    ]
  },
  {
    id: 4,
    title: 'Backend Developer',
    shortDescription:
      'Join our team as a Backend Developer and work on building scalable and robust server-side applications!',
    description:
      "As a Backend Developer, you will be responsible for designing and implementing server-side logic, databases, and APIs. You will collaborate with frontend developers to deliver end-to-end solutions that meet our clients' needs while ensuring high performance and reliability.",
    skills: ['Node.js', 'Python', 'Java', 'RESTful APIs', 'SQL', 'NoSQL'],
    responsibilities: [
      'Developing server-side logic and APIs using Node.js, Python, or Java',
      'Designing and optimizing databases using SQL and NoSQL technologies',
      'Implementing security and data protection measures',
      'Collaborating with frontend developers to integrate frontend and backend functionality',
      'Writing reusable, testable, and efficient code'
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      'Strong proficiency in server-side programming languages such as Node.js, Python, or Java',
      'Experience with relational and non-relational databases',
      'Knowledge of RESTful API design principles',
      'Ability to work in a collaborative team environment'
    ],
    todo: [
      'Gain familiarity with our existing backend architecture and codebase',
      'Participate in code reviews and provide constructive feedback',
      'Collaborate with cross-functional teams to plan and prioritize development tasks',
      'Stay updated on emerging backend technologies and best practices'
    ]
  },
  {
    id: 5,
    title: 'User Support Specialist',
    shortDescription:
      "We're hiring a User Support Specialist to provide exceptional technical assistance and customer service to our clients!",
    description:
      'As a User Support Specialist, you will serve as the first point of contact for clients seeking technical assistance with our products and services. You will troubleshoot issues, provide solutions, and escalate complex problems to the appropriate teams while ensuring a positive customer experience.',
    skills: [
      'Technical Support',
      'Customer Service',
      'Troubleshooting',
      'Ticketing Systems'
    ],
    responsibilities: [
      'Responding to user inquiries and technical support requests via email, chat, or phone',
      'Troubleshooting software and hardware issues and providing timely resolutions',
      'Documenting and tracking support tickets using ticketing systems',
      'Escalating unresolved issues to the appropriate teams and following up to ensure resolution',
      'Providing user training and guidance on product features and functionality'
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Information Technology, or related field",
      'Proven experience in technical support or customer service roles',
      'Excellent communication and interpersonal skills',
      'Ability to diagnose and resolve technical issues',
      'Familiarity with ticketing systems and remote support tools'
    ],
    todo: [
      'Familiarize yourself with our products and services',
      'Participate in training sessions to enhance your technical knowledge',
      'Collaborate with cross-functional teams to improve the user support experience',
      'Stay updated on industry trends and best practices in user support'
    ]
  },
  {
    id: 6,
    title: 'AI Engineer',
    shortDescription:
      "We're seeking an AI Engineer to develop innovative machine learning models and algorithms!",
    description:
      'As an AI Engineer, you will collaborate with data scientists and software engineers to design, implement, and deploy machine learning solutions. You will work on cutting-edge projects that leverage artificial intelligence and data analytics to drive business insights and decision-making.',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Python',
      'TensorFlow',
      'PyTorch',
      'Data Science'
    ],
    responsibilities: [
      'Researching, designing, and implementing machine learning algorithms and models',
      'Training and fine-tuning models using large datasets',
      'Collaborating with cross-functional teams to integrate machine learning solutions into products and services',
      'Testing and evaluating model performance and accuracy',
      'Staying updated on advancements in artificial intelligence and machine learning'
    ],
    requirements: [
      "Master's degree or Ph.D. in Computer Science, Data Science, or related field",
      'Strong background in machine learning and deep learning algorithms',
      'Proficiency in programming languages such as Python',
      'Experience with machine learning frameworks such as TensorFlow or PyTorch',
      'Ability to work in a collaborative team environment'
    ],
    todo: [
      'Familiarize yourself with our existing machine learning infrastructure and datasets',
      'Participate in brainstorming sessions to identify potential AI-driven solutions',
      'Collaborate with data scientists and software engineers to implement and deploy models',
      'Stay updated on emerging trends and research in artificial intelligence and machine learning'
    ]
  },
  {
    id: 7,
    title: 'Infrastructure Engineer',
    shortDescription:
      'Join our team as an Infrastructure Engineer and play a key role in designing and maintaining our IT infrastructure!',
    description:
      'As an Infrastructure Engineer, you will be responsible for designing, implementing, and managing our IT infrastructure, including networks, servers, and storage systems. You will collaborate with cross-functional teams to ensure the reliability, security, and scalability of our infrastructure.',
    skills: [
      'Networking',
      'Server Administration',
      'Cloud Computing',
      'Security'
    ],
    responsibilities: [
      'Designing and implementing network infrastructure, including LAN, WAN, and VPN',
      'Managing server infrastructure, including physical and virtual servers',
      'Configuring and maintaining cloud infrastructure on platforms like AWS, GCP, or Azure',
      'Implementing security measures to protect against cyber threats and data breaches',
      'Monitoring system performance and ensuring high availability and reliability'
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Information Technology, or related field",
      'Proven experience in network and server administration roles',
      'Strong understanding of cloud computing concepts and platforms',
      'Knowledge of cybersecurity best practices and compliance standards',
      'Ability to troubleshoot complex infrastructure issues'
    ],
    todo: [
      'Familiarize yourself with our existing infrastructure architecture and systems',
      'Participate in planning and implementing infrastructure upgrades and migrations',
      'Collaborate with cross-functional teams to ensure alignment with business requirements',
      'Stay updated on emerging technologies and best practices in infrastructure management'
    ]
  }
  // Add more positions here...
];
