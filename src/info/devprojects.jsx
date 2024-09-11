import Blog from "../img/Blog.png"
import FortuneApi from "../img/Fortune API.png"
import Permalist from "../img/Permalist.png"
import Webportfolio from "../img/WebPortfolio.png"




const DevProjectsList= [
    {
        id: 1,
        title: "Zeever",
        description: "This is a responsive website built using only the basics of web development and its based of a template.",
        url: "https://github.com/santiarco92/Zeever",
        stack: ["HTML 5","CSS"],
        image: "../img/portfolio-website.png",
        
    },
    {
        id: 2,
        title: "Fortune API",
        description: "This is a responsive website built using an API, the idea of this websie is for the user to be able to get a radome fortune cookie everytime they click the button",
        url: "https://github.com/santiarco92/fortune-API",
        stack: ["HTML 5", "CSS", "JavaScript", "Node.js", "Axios", "ExpressJS"],
        image: FortuneApi,

    },
    {
        id: 3,
        title: "Permalist",
        description: "This is a responsive website implmenting server calls to acces a database",
        url: "https://github.com/santiarco92/Permalist",
        stack: ["HTML 5", "Express.js", "Next.js", "CSS", "JavaScript", "Node.js"],
        image: Permalist,

    },
    {
        id: 4,
        title: "Blog",
        description: "This is a responsive website created to gathered the info shared by the user and post it.",
        url: "https://github.com/santiarco92/blog",
        stack: ["HTML 5", "Express.js", "Next.js", "CSS", "JavaScript", "Node.js"],
        image: Blog,

    },
    {
        id: 5,
        title: "Portfolio Website",
        description: "This is a responsive website built with React and Next.js. It includes a customizable header, footer, and a section for displaying my projects.",
        url: "https://github.com/santiarco92/Portfolio",
        stack: ["React", "HTML 5", "CSS", "JavaScript"],
        image: Webportfolio,

    },
]

export default DevProjectsList;