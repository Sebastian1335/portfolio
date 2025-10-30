import React, { useEffect } from "react";
import "animate.css";
import "./Portfolio.css";
import { projects, skills } from "../data/data";
import { Projectcard } from "./components/project-card";
import { SkillCard } from "./components/SkillCard";

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
                        Soy estudiante de 10mo ciclo de Ingeniería de Sistemas en
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
                            <SkillCard index={index} skill={skill}/>
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
                <div className="container">
                    <h2 className="section-title"></h2>
                    <div className="card">
                        <h3>Programador Backend - Kiura; Marzo - Julio - 2025</h3>
                        <p>
                            Encargado de construir endpoints, documentar código, corregir errores
                            y trabajar con el equipo de frontend y QA para construir proyectos.
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
                            <Projectcard index={index} project={project}/>
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
                            <Projectcard index={index} project={project}/>
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
