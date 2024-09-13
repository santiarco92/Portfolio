import Blog from "../img/Blog.png"
import FortuneApi from "../img/Fortune API.png"
import Permalist from "../img/Permalist.png"
import Webportfolio from "../img/WebPortfolio.png"
import Zeever from "../img/Zeever.png"




const DevProjectsList= [
    {
        id: 1,
        title: "Zeever",
        description: "This is a responsive website built using only the basics of web development and it is based on a template.",
        url: "https://github.com/santiarco92/Zeever",
        stack: "HTML 5, CSS",
        image: Zeever,
        aos: "fade-left",
        
    },
    {
        id: 2,
        title: "Fortune API",
        description: "This is a responsive website built using an API, the idea of this website is for the user to be able to get a radome fortune cookie every time they click the button",
        url: "https://github.com/santiarco92/fortune-API",
        stack: "HTML 5, CSS, JavaScript, Node.js, Axios, Express.js",
        image: FortuneApi,
        aos: "fade-left",

    },
    {
        id: 3,
        title: "Permalist",
        description: "This is a responsive website implementing server calls to access a database",
        url: "https://github.com/santiarco92/Permalist",
        stack: "HTML 5, Express.js, Next.js, CSS, JavaScript, Node.js",
        image: Permalist,
        aos: "fade-left",

    },
    {
        id: 4,
        title: "Blog",
        description: "This is a responsive website created to gather the info shared by the user and post it.",
        url: "https://github.com/santiarco92/blog",
        stack: "HTML 5, Express.js, Next.js, CSS, JavaScript, Node.js",
        image: Blog,
        aos: "fade-right",

    },
    {
        id: 5,
        title: "Portfolio Website",
        description: "This is a responsive website built as a personal portfolio.",
        url: "https://github.com/santiarco92/Portfolio",
        stack: "React, HTML 5, CSS, JavaScript",
        image: Webportfolio,
        aos: "fade-right",
        

    },
]

export default DevProjectsList;