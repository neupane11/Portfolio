import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaJava, FaNode, FaPython, FaReact} from 'react-icons/fa';
import { DiGit, DiMongodb } from "react-icons/di";


export const skills = {
    frontend: [
      {
       
        imgAltText: "HTML 5",
        icon: FaHtml5 ,
        skillName: "HTML5",
      },
      {
        
        imgAltText: "CSS 3",
        icon: FaCss3,
        skillName: "CSS3",
      },
      
      
      {
        
        imgAltText: "Bootstrap",
        imgSrc:FaBootstrap,
        skillName: "Bootstrap",
      },
      {
        
        imgAltText: "React JS",
        imgSrc:FaReact,
        skillName: "React JS",
      },
      

      
    ],
  
    backend: [
      {
        
        imgAltText: "Node.js",
        imgSrc:FaNode,
        skillName: "Node.js",
      },
      
      
    ],
    hostingPlatforms: [
      
      
      {
        
        imgAltText: "GitHub Pages",
        icon:<FaGithub color="red" size="100px"/>,
        skillName: "GitHub Pages",
      },
    ],
    programmingLanguages: [
      {
        
        imgAltText: "JavaScript",
        imgSrc:FaJava,
        skillName: "JavaScript",
      },
      
      {
        
        imgAltText: "Python",
        imgSrc:FaPython,
        skillName: "Python",
      },
      
    ],
    databases: [
     
      
      {
        
        imgAltText: "MongoDB",
        imgSrc:DiMongodb,
        skillName: "MongoDB",
      },
    ],
    versionControl: [
      {
        
        imgAltText: "GIT",
        imgSrc:DiGit,
        skillName: "GIT",
      },
    ],
  };