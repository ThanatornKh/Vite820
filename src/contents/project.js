import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picExp from '../assets/exp_site.png'
import picLittleLemon from '../assets/littlelemon.png'

export const data = [
    {
        date: "2020-2021",
        title: "Fullstackkk · Sport Analysis System",
        link: "https://github.com/ThanatornKh/Vite820.git/",
        materials: [
            { type: faGithub, link: "https://github.com/ThanatornKh/Vite820.git/" },
            { type: faYoutube, link: "https://github.com/ThanatornKh/Vite820.git/" },
            { type: faMedium, link: "https://github.com/ThanatornKh/Vite820.git/" },
        ],
        descriptions: [
            "Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.",
            "Create tools for monitoring the backend and implementing self-recovery mechanisms, ensuring their seamless operation 24/7.",
        ],
        skills: [
            ["React", "Redus", "MUI"],
            ["NginX", "NodeJS", "Express", "MongoDB"],
        ],
        picture: picExp,
    },
    {
        date: "2019-2020",
        title: "Fashion Ecommerce",
        link: "https://github.com/ThanatornKh/Vite820.git/",
        materials: [
            { type: faGithub, link: "https://github.com/ThanatornKh/Vite820.git/" },
        ],
        descriptions: [
            "Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.",
        ],
        skills: [
            ["NginX", "NodeJS", "Express", "MongoDB"],
        ],
        picture: picLittleLemon,
    },
    {
        date: "2018-2019",
        title: "Fashion Ecommerce",
        descriptions: [
            "Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.",
        ],
        skills: [
            ["NginX", "NodeJS", "Express", "MongoDB"],
        ],
        picture: picLittleLemon,
    },
]