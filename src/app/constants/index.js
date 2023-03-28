import {
  mobile,
  backend,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  web,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bootstrap,
  c,
  chakra,
  csharp,
  cpp,
  java,
  kotlin,
  laravel,
  mysql,
  mssql,
  nextjs1,
  php,
  web1,
  ucp,
  document,
  ui,
  panaverse,
  foodweb,
  tawakal,
  stdt,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Software Analyst",
    icon: backend,
  },
  {
    title: "Documentation & Quality Assurance",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next Js",
    icon: nextjs1,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Chakra",
    icon: chakra,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MsSQL",
    icon: mssql,
  },
];

const experiences = [
  {
    title: "Bachelors in Software Engineering",
    company_name: "University of Central Punjab",
    icon: ucp,
    iconBg: "#E6DEDD",
    date: "Oct 2019 - Sept 2023",
    points: [
      "I have gained expertise in project management, software testing, and various programming languages including Java, C++, and JavaScript.",
      "Additionally, my coursework in Human-Computer Interaction, OOP, DSA, Mobile Application, and Web Development using ReactJs & laravel has further diversified my skill set.",
      "Currently, I am developing a Lawyer Hiring System using the MERN stack, which has honed my full-stack web development and Project Management Skills.",
    ],
  },
  {
    title: "Web 3.0 & Metaverse",
    company_name: "Panaverse Dao",
    icon: panaverse,
    iconBg: "#383E56",
    date: "Oct 2022 - Sept 2023",
    points: [
      "I have learned JS, Typescript, NextJs, designing skills, Api fetching from web 2.0 deployed few websites even this portfolio you are viewing is also coded by me in NextJs",
      "Currently, Gonna switch to web 3.0 Blockchain technologies this semester.",
    ],
  },
  {
    title: "Web Development",
    company_name: "Personal",
    icon: web1,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
      "I developed many Web Applications including Front & Back-End Coding",
      "Created 5+ websites on ReactJs that resulted in a strong skill",
      "More then 5 websites on NextJs .",
      "I also developed Admin portal and 2Fac-Auth (OTP) for Asia Pasific University, Malaysia Using C# & aspx (Fiverr).",
    ],
  },

  {
    title: "Documentations & Analyzing",
    company_name: "Ms Word",
    icon: document,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "I have extensive experience in documenting software systems, including writing functional and non-functional requirements, creating system architecture diagrams, and building use case and sequence diagrams. I have applied these skills to projects such as 'Charity Management System,' 'Online Barber,' 'Lawyer Hiring System,' and 'Tutor Online,' enabling effective communication and ensuring the successful development of these software solutions.",
    ],
  },
  {
    title: "UI/UX Designs",
    company_name: "Figma & JustInMind",
    icon: ui,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "I have developed numerous web and mobile app prototypes utilizing industry-standard tools.",
      " I designed prototypes for a web-based project called 'Advo-Lancing' using Figma",
      "Prototypes for Mobile app called 'Online Barber App' using JustinMind.",
      "These experiences have honed my skills in designing user-friendly interfaces and creating prototypes that effectively communicate design concepts.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Fasih worked well alongside me and manage to fulfill all my requirements. I am very sattisfied with his work and he is extremely worth it for the reasonable price.",
    name: "Kuhan",
    designation: "Customer",
    company: "Fiverr",
    image: stdt,
  },
  {
    testimonial:
      "He's a brilliant student. he thinks logically to solve a problem. he has strong concepts in coding",
    name: "Zohaib",
    designation: "Asc Professor",
    company: "UCP",
    image: stdt,
  },
  {
    testimonial:
      "I was facing issue in web development so he helped me through my hard time. he's good in front-end development",
    name: "Tawakal",
    designation: "president",
    company: "Freelance Force",
    image: tawakal,
  },
];

const projects = [
  {
    name: "ADVO-LANCING",
    description:
      "Web-based platform that allows users to searchand contact new lawyers typewriter, testimonials and other contact forms are build in it.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/fasihkhan754?tab=repositories",
    websitelink: "https://faseehzadvolancing.netlify.app/",
  },
  {
    name: "FOOD WEBSITE",
    description:
      "This web application uses API. you can search for any food here. It will give you ingrediants about that recipe and also tell you how to Cook that this  .",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: foodweb,
    source_code_link: "https://github.com/fasihkhan754?tab=repositories",
    websitelink: "https://foodwebsitebyfasih.netlify.app/",
  },
  {
    name: "E-Comerse website",
    description:
      "This website is a dummy website . it have add to cart feature and also a good display. this website was built for practicing and gaining skills.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/fasihkhan754?tab=repositories",
    websitelink: "https://faseehshopping.netlify.app/",
  },
  {
    name: "Panaverse Website",
    description:
      "This website was made for Panaverse website using nextJs new things and components of chakra were used to create this website.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "chakraUI",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/fasihkhan754?tab=repositories",
    websitelink: "https://nextjs-chakra-panaverse-fasih.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
