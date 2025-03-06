import React, { useEffect } from "react";
import "animate.css";
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
import "./Portfolio.css";

const projects = {
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
        }
    ],
};

const skills = [
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

export const Portfolio = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "animate__animated",
                            "animate__fadeIn"
                        );
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll(".scroll-animate").forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="portfolio">
            {/* Hero Section */}
            <section className="hero scroll-animate">
                <div className="container">
                    <h1 className="gradient-text animate__bounceInDown">
                        Sebastián Guzmán
                    </h1>
                    <p className="subtitle animate__fadeIn animate__delay-1s">
                        Desarrollador de Software | Backend & Frontend
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="section scroll-animate">
                <div className="container">
                    <h2 className="section-title">Sobre Mí</h2>
                    <div className="card">
                        <p>
                        Soy estudiante de 9no ciclo de Ingeniería de Sistemas en
                        la Universidad de Lima con una sólida base en desarrollo
                        backend y frontend. Me apasiona la arquitectura de
                        software, las metodologías ágiles y la creación de
                        soluciones tecnológicas escalables. Combino mis
                        habilidades técnicas con disciplina y liderazgo,
                        adquiridos a través de mi trayectoria en el deporte de
                        alto rendimiento.
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section scroll-animate">
                <div className="container">
                    <h2 className="section-title">Habilidades</h2>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <h3>
                                    {skill.icon} {skill.name}
                                </h3>
                                <div className="skill-tags">
                                    <span className="tag level-tag">
                                        {skill.level}
                                    </span>
                                    <span className="tag category-tag">
                                        {skill.category}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="section scroll-animate">
                <div className="container">
                    <h2 className="section-title">Experiencia</h2>
                    <div className="card">
                        <h3>Programador Backend - CUNI</h3>
                        <p>
                            Desarrollo del MVP para una plataforma educativa
                            gamificada, reduciendo la brecha de acceso
                            universitario. Implementación de soluciones
                            escalables con Node.js y bases de datos SQL. Trabajo
                            en equipo bajo metodología SCRUM, gestionando tareas
                            con Jira.
                        </p>
                    </div>
                </div>
            </section>

            {/* Frontend Projects Section */}
            <section className="section scroll-animate">
                <div className="container">
                    <h2 className="section-title">Proyectos Frontend</h2>
                    <div className="projects-grid">
                        {projects.frontend.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="project-image">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link"
                                        >
                                            Demo
                                        </a>
                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link"
                                        >
                                            Código
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Backend Projects Section */}
            <section className="section scroll-animate">
                <div className="container">
                    <h2 className="section-title">Proyectos Backend</h2>
                    <div className="projects-grid">
                        {projects.backend.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="project-image">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link"
                                        >
                                            Código
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section scroll-animate">
                <div className="container">
                    <h2 className="section-title small">Contacto</h2>
                    <div className="contact-content">
                        <a
                            href="mailto:s.guzman.1335@gmail.com"
                            className="contact-link"
                        >
                            s.guzman.1335@gmail.com
                        </a>
                        <a href="tel:+51924251590" className="contact-link">
                            +51 924 251 590
                        </a>
                        <button
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = "/docs/CV.pdf"; 
                                link.download = "CV.pdf";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            className="download-btn"
                        >
                            Descargar CV
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
