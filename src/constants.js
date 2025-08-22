// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import appwrite from './assets/tech_logo/appwrite.png';

// Experience Section Logo's
import voclogo from './assets/company_logo/voclogo.png';
import edunet from './assets/company_logo/edunet.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import rcciit from './assets/education_logo/rcciit.png';
import hab from './assets/education_logo/hab.png';

// Project Section Logo's
import billqube from './assets/work_logo/billqube.png';
import qwikbit from './assets/work_logo/qwikbit.png';
import movify from './assets/work_logo/movify.png';
import eurek from './assets/work_logo/eureka-weather.png';
import tictac from './assets/work_logo/tictac.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'SASS', logo: sassLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            // { name: 'Angular', logo: angularLogo },
            { name: 'Redux', logo: reduxLogo },
            // { name: 'Next JS', logo: nextjsLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
            { name: 'GSAP', logo: gsapLogo },
            { name: 'Material UI', logo: materialuiLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Springboot', logo: springbootLogo },
            { name: 'Appwrite', logo: appwrite },
            // { name: 'Express JS', logo: expressjsLogo },
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'MongoDB', logo: mongodbLogo },
            { name: 'Firebase', logo: firebaseLogo },
            { name: 'PostgreSQL', logo: postgreLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'Java', logo: javaLogo },
            { name: 'Python', logo: pythonLogo },
            // { name: 'C-Sharp', logo: csharpLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            // { name: 'TypeScript', logo: typescriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Compass', logo: mcLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },
            { name: 'Figma', logo: figmaLogo },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: voclogo,
        role: "Web Developer",
        company: "Vault Of Codes",
        date: "August 2025 - Present",
        desc: "Developed dynamic and scalable web applications , handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            // "TypeScript",
            // "Node JS",
            "Tailwind CSS",
            "MongoDb",
            "Redux",
            // " Next Js",
        ],
    },
    {
        id: 1,
        img: edunet,
        role: "Front End Web Development ",
        company: "Edunet Foundation IBM SkillsBuild",
        date: "August 2025 - September 2025",
        desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
        skills: [
            "ReactJS",
            "Redux",
            "JavaScript",
            "Tailwind CSS",
            "HTML",
            "CSS",
            "Material UI",
            "SQL",
        ],
    },

];

export const education = [
    {
        id: 0,
        img: rcciit,
        school: "RCC Institute of Information Technology, Kolkata",
        date: "October 2022 – July 2026",
        grade: " 7.92 CGPA (Upto 6 th Sem) ",
        desc: "I am currently completing my Bachelor's degree in Computer Science and Engineering (B.Tech) from RCC Institute of Information Technology, Kolkata. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. RCCIIT allowed me to work on projects that applied theoretical concepts to real-world problems.",
        degree: "Bachelor of Technology (B.Tech.) - Computer Science and Engineering",
    },
    {
        id: 1,
        img: hab,
        school: "Hatthuba Adarsha Vidyapith (H.S) , Habra ",
        date: "May 2019 – April 2021",
        grade: "74.20%",
        desc: "I completed my class 12 education from Hatthuba Adarsha Vidyapith (H.S) , Habra, under the WBCHSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Biology.",
        degree: "WBCHSE(XII) - PCM with Biology",
    },
    {
        id: 2,
        img: hab,
        school: "Hatthuba Adarsha Vidyapith (H.S) , Habra",
        date: "January 2013 - March 2019",
        grade: "78 %",
        desc: "I completed my class 10 education from Hatthuba Adarsha Vidyapith (H.S) , Habra, under the WBBSE board, where I studied Science , Arts  with Computer.",
        degree: " WBBSE(X) ",
    },
];

export const projects = [
    {
        id: 0,
        title: "BillQube – Invoice Generator Application ",
        description:
            "Built and deployed a full-stack invoice management platform using React.js, Spring Boot, and MongoDB Atlas.\n" +
            "Integrated Clerk authentication (Google/email), JWT-based Spring Security, and a dashboard to manage saved\n" +
            "invoices. Added six customizable templates, with support for PDF download and email delivery, deployed via\n" +
            "Netlify and Render.\n",
        image: billqube,
        tags: ["HTML", "CSS", "JavaScript", "React JS", "API","SpringBoot","MongoDB","Clerk",],
        github: "https://github.com/sumitkd16/BillQube-Invoice-Generator",
        webapp: "https://billqube.netlify.app/",
    },
    {
        id: 1,
        title: "QwikBit – URL Shortener Application ",
        description:
            "Developed a secure URL shortening platform with React.js, Spring Boot, and PostgreSQL (Neon DB). Users can generate short links, customize them, and track real-time click analytics via a personal dashboard. Implemented JWT authentication for secure access, with deployment on Netlify and Render.",
        image: qwikbit,
        tags: ["HTML", "CSS", "JavaScript", "React JS", "API","SpringBoot","MongoDB","NeonDB","PostgreSQL",],
        github: "https://github.com/sumitkd16/QwikBit-Link-Shortener",
        webapp: "https://qwikbit.netlify.app/",
    },
    {
        id: 2,
        title: "Movify - Movie Recommendation App",
        description:
            "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
        image: movify,
        tags: ["React JS", "API", "HTML", "CSS", "JavaScript" , "Appwrite"],
        github: "https://github.com/sumitkd16/Movify---Movie-Recommendation-App",
        webapp: "https://skdmovify.netlify.app/",
    },
    {
        id: 3,
        title: "Eureka — Weather App ",
        description:
            "Get the latest weather update ",
        image: eurek,
        tags: [ "API", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/sumitkd16/weather-app",
        webapp: "https://eurekaweather.netlify.app/",
    },
    {
        id: 4,
        title: "Tic Tac Toe - Game App ",
        description:
            "A very fun Gaming APP  ",
        image: tictac,
        tags: [ "API", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/sumitkd16/tic-tac-toe-game",
        webapp: "https://sumitkd16.github.io/tic-tac-toe-game/",
    },

];