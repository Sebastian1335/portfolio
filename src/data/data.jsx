import {
    FaPython,
    FaJs,
    FaDatabase,
    FaNodeJs,
    FaReact,
    FaDocker,
    FaGitAlt,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export const projects = {
    frontend: [
        {
            title: "Gif App (Básico)",
            description:
                "Aplicación de búsqueda y visualización de GIFs con integración de API",
            image: "https://i.gifer.com/origin/93/935d72c7bc35828ea93b5898691f28fd_w200.gif",
            link: "https://gif-app-1335.netlify.app/",
            repo: "https://github.com/FrogSyntax/react-gif-expert",
            tags: ["React", "API Integration", "CSS"],
        },
        {
            title: "Heroes (Básico)",
            description:
                "Catálogo interactivo de superhéroes con funcionalidades de búsqueda y filtrado",
            image: "https://i.pinimg.com/736x/46/77/a0/4677a0a9d11f511a6479c77e0bc1511c.jpg",
            link: "https://heroes-1335.netlify.app/",
            repo: "https://github.com/Sebastian1335/Heroes",
            tags: ["React", "Router", "Material-UI"],
        },
        {
            title: "Agenda/Notas (Avanzado)",
            description:
                "Aplicación completa de gestión de notas con autenticación y persistencia de datos",
            image: "https://img.freepik.com/vector-premium/icono-libreta-direcciones-plantilla-vectorial-logotipo-coleccion-moda-diseno-plano-oro_917138-11197.jpg",
            link: "https://notes1335.netlify.app/",
            repo: "https://github.com/Sebastian1335/Journal.git",
            tags: ["React", "Firebase", "Redux"],
        },
        {
            title: "Calendario (Avanzado)",
            description:
                "Calendario con CRUD de eventos",
            image: "https://img.freepik.com/vector-gratis/estilo-glifo-rojo-calendario_78370-7233.jpg",
            link: "https://calendar-back-production.up.railway.app",
            repo: "https://github.com/Sebastian1335/calendar-back",
            tags: ["React", "Node.js", "Mongo", "express", "Redux"],
        },
        {
            title: "JWT inseguro proyecto SSTI",
            description:
                "Pagina web con malas practicas de JWT con fines académicos",
            image: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
            link: "https://ssti-front.netlify.app",
            repo: "https://github.com/Sebastian1335/ssti-front",
            tags: ["React", "Express", "Redux", "JWT"],
        },
        {
            title: "Prueba Técnica realizada",
            description:
                "Prueba tecnica de la empresa InSalud",
            image: "https://cdn2.hubspot.net/hubfs/839217/Descubre%20la%20coincidencia%20entre%20pa%C3%ADses%20y%20nacionalidades%20en%20portugu%C3%A9s%20y%20espa%C3%B1ol.jpg",
            link: "https://pais-api-pt.vercel.app/",
            repo: "https://github.com/Sebastian1335/PaisApi_PT",
            tags: ["React", "Next", "Zustand"],
        },
        {
            title: "Proyecto del curso de proyecto de desarrollo de software",
            description:
                "Tindart, red social para artistas (en construcción)",
            image: "https://wallpapers.com/images/featured/arte-moderno-eua0t4x1os9lp8vr.jpg",
            link: "",
            repo: "https://github.com/Sebastian1335/tindart-front",
            tags: ["React", "Vite", "Zustand", "React-router"],
        },
    ],
    backend: [
        {
            title: "CUNI Backend",
            description:
                "API RESTful para plataforma educativa con arquitectura escalable",
            image: "https://cunieduca.com/Assets/Landing/image%201.png",
            repo: "https://github.com/Sebastian1335/cuyBack",
            tags: ["Node.js", "Express", "SQL", "Prisma"],
        },
        {
            title: "Aplicacion de terminal simple",
            description: "Aplicacion de terminal para operaciones de multiplicacion",
            image: "https://cdn.iconscout.com/icon/free/png-256/free-terminal-logo-icon-download-in-svg-png-gif-file-formats--devicons-pack-design-development-icons-458204.png?f=webp&w=256",
            repo: "https://github.com/Sebastian1335/aplicacionTerminal",
            tags: ["Node.js", "FS", "Jest", "Yargs"],
        },
        {
            title: "Proyecto del curso de proyecto de desarrollo de software",
            description: "Backend de Tindart",
            image: "https://wallpapers.com/images/featured/arte-moderno-eua0t4x1os9lp8vr.jpg",
            repo: "https://github.com/Sebastian1335/tindart-back",
            tags: ["Node.js", "typescript", "express"],
        }
    ],
};

export const skills = [
    {
        name: "Python",
        level: "Avanzado",
        category: "Backend",
        icon: <FaPython />,
    },
    {
        name: "JavaScript",
        level: "Avanzado",
        category: "Full Stack",
        icon: <FaJs />,
    },
    {
        name: "TypeScript",
        level: "Avanzado",
        category: "Full Stack",
        icon: <SiTypescript />,
    },
    {
        name: "SQL",
        level: "Avanzado",
        category: "Backend",
        icon: <FaDatabase />,
    },
    {
        name: "Node.js",
        level: "Avanzado",
        category: "Backend",
        icon: <FaNodeJs />,
    },
    {
        name: "React",
        level: "Avanzado",
        category: "Frontend",
        icon: <FaReact />,
    },
    {
        name: "Docker",
        level: "Básico",
        category: "DevOps",
        icon: <FaDocker />,
    },
    {
        name: "Git/GitHub",
        level: "Avanzado",
        category: "DevOps",
        icon: <FaGitAlt />,
    },
];