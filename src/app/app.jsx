import React from "react";
import {
    CssBaseline,
    Container,
    Box,
    Typography,
    Link,
    Button,
    Divider,
    Card,
    CardContent,
    CardMedia,
    Grid2,
} from "@mui/material";
import "animate.css";
const proyectos = [
    {
        title: "Gif App (Básico)",
        image: "https://i.gifer.com/origin/93/935d72c7bc35828ea93b5898691f28fd_w200.gif",
        link: "https://gif-app-1335.netlify.app/",
        repo: "https://github.com/FrogSyntax/react-gif-expert",
    },
    {
        title: "Heroes (Básico)",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc056787-84e2-43a3-91da-a3f95c10e0e5/dd2kjta-2b1cfdec-5c77-4ceb-9190-4f7ad0f813b6.png/v1/fill/w_1280,h_1283/my_own_idea_of_a_dc_vs_marvel_video_game_lc_by_liamcampbell_dd2kjta-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MyIsInBhdGgiOiJcL2ZcL2JjMDU2Nzg3LTg0ZTItNDNhMy05MWRhLWEzZjk1YzEwZTBlNVwvZGQya2p0YS0yYjFjZmRlYy01Yzc3LTRjZWItOTE5MC00ZjdhZDBmODEzYjYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9EgNZVAGX5MMvMIYaED_n5UgTurojK5UBksj92V6tA0",
        link: "https://heroes-1335.netlify.app/",
        repo: "https://github.com/Sebastian1335/Heroes",
    },
    {
        title: "Agenda/Notas (Avanzado)",
        image: "https://img.freepik.com/vector-premium/icono-libreta-direcciones-plantilla-vectorial-logotipo-coleccion-moda-diseno-plano-oro_917138-11197.jpg",
        link: "https://notes1335.netlify.app/",
        repo: "https://github.com/Sebastian1335/Journal.git",
    },
];
const proyectosBack = [
    {
        title: "Cuni Backend",
        image: "https://google.com",
        link: "https://google.com",
        repo: "https://google.com",
    },
    {
        title: "Heroes (Básico)",
        image: "https://google.com",
        link: "https://google.com",
        repo: "https://google.com",
    },
    {
        title: "Agenda/Notas (Avanzado)",
        image: "https://google.com",
        link: "https://google.com",
        repo: "https://google.com",
    },
];

const skills = [
    "Python (Avanzado)",
    "JavaScript (Avanzado)",
    "TypeScript (Avanzado)",
    "SQL (Avanzado)",
    "Node.js (Avanzado)",
    "React (Avanzado)",
    "Docker (Básico)",
    "Git/GitHub (Avanzado)",
    "Jest(Avanzado)",
];
export const Portfolio = () => {
    

    return (
        <Box
            sx={{
                bgcolor: "#212121",
                color: "white",
                minHeight: "100vh",
                p: 4,
                backgroundImage: `url(https://media.tenor.com/TZaIBNauQfAAAAAM/stars-galaxy.gif), linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1))`,
                backgroundBlendMode: "overlay",
            }}
        >
            <CssBaseline />
            <Container>
                {/* Header */}
                <Box
                    textAlign="center"
                    className="animate__animated animate__bounceInDown"
                    sx={{ py: 4 }}
                >
                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        color="primary.light"
                    >
                        Sebastián Guzmán
                    </Typography>
                    <Typography variant="h5" color="gray">
                        Desarrollador de Software | Backend & Frontend
                    </Typography>
                </Box>

                <Divider sx={{ bgcolor: "gray", my: 4 }} />

                {/* //!  Sobre Mí */}
                <Box
                    className="animate__animated animate__fadeIn animate__faster"
                    sx={{ mb: 4 }}
                >
                    <Typography variant="h4" color="secondary.light">
                        Sobre Mí
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 1 }}>
                        Soy estudiante de 9no ciclo de Ingeniería de Sistemas en
                        la Universidad de Lima con una sólida base en desarrollo
                        backend y frontend. Me apasiona la arquitectura de
                        software, las metodologías ágiles y la creación de
                        soluciones tecnológicas escalables. Combino mis
                        habilidades técnicas con disciplina y liderazgo,
                        adquiridos a través de mi trayectoria en el deporte de
                        alto rendimiento.
                    </Typography>
                </Box>

                <Divider sx={{ bgcolor: "gray", my: 4 }} />

                {/*//!  Habilidades */}
                <Box
                    className="animate__animated animate__fadeIn animate__fast"
                    sx={{ mb: 4 }}
                >
                    <Typography variant="h4" color="secondary.light">
                        Habilidades
                    </Typography>
                    <Grid2 container spacing={2} mt={2}>
                        {skills.map((skill) => (
                            <Grid2 item xs={12} sm={6} key={skill}>
                                <Typography variant="h6">
                                    ✅ {skill}{" "}
                                </Typography>
                            </Grid2>
                        ))}
                    </Grid2>
                </Box>

                <Divider sx={{ bgcolor: "gray", my: 4 }} />

                {/* //! Experiencia */}
                <Box
                    className="animate__animated animate__fadeIn animate__fast"
                    sx={{ mb: 4 }}
                >
                    <Typography variant="h4" color="secondary.light">
                        Experiencia
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="h6" fontWeight="bold">
                            Programador Backend - CUNI
                        </Typography>
                        <Typography variant="h6" sx={{ mt: 1 }}>
                            Desarrollo del MVP para una plataforma educativa
                            gamificada, reduciendo la brecha de acceso
                            universitario. Implementación de soluciones
                            escalables con Node.js y bases de datos SQL. Trabajo
                            en equipo bajo metodología SCRUM, gestionando tareas
                            con Jira.
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ bgcolor: "gray", my: 4 }} />

                {/*//!  Proyectos */}
                <Box
                    className="animate__animated animate__fadeInUp"
                    sx={{ mb: 4 }}
                >
                    <Typography variant="h4" color="secondary.light">
                        Proyectos Frontend
                    </Typography>
                    <Grid2 container spacing={2} mt={2}>
                        {proyectos.map((project, index) => (
                            <Grid2 item xs={13} sm={4} key={index}>
                                <Card sx={{ bgcolor: "#333", color: "white" }}>
                                    <CardMedia
                                        component="img"
                                        height="225"
                                        image={project.image}
                                        alt={project.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h6">
                                            {project.title}
                                        </Typography>
                                        <hr />
                                        <Link
                                            href={project.link}
                                            color="primary.light"
                                            target="_blank"
                                            underline="hover"
                                        >
                                            Ver Proyecto
                                        </Link>
                                        <Link
                                            href={project.repo}
                                            ml={2}
                                            color="primary.light"
                                            target="_blank"
                                            underline="hover"
                                        >
                                            Ver repositorio
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Grid2>
                        ))}
                    </Grid2>
                </Box>

                <Box
                    className="animate__animated animate__fadeInUp"
                    sx={{ mb: 4 }}
                >
                    <Typography variant="h4" color="secondary.light">
                        Proyectos Backend
                    </Typography>
                    <Grid2 container spacing={2} mt={2}>
                        {proyectosBack.map((project, index) => (
                            <Grid2 item xs={13} sm={4} key={index}>
                                <Card sx={{ bgcolor: "#333", color: "white" }}>
                                    <CardMedia
                                        component="img"
                                        height="225"
                                        image={project.image}
                                        alt={project.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h6">
                                            {project.title}
                                        </Typography>
                                        <hr />
                                        {/* <Link
                                            href={project.link}
                                            color="primary.light"
                                            target="_blank"
                                            underline="hover"
                                        >
                                            Ver Proyecto
                                        </Link> */}
                                        <Link
                                            href={project.repo}
                                            // ml={2}
                                            color="primary.light"
                                            target="_blank"
                                            underline="hover"
                                        >
                                            Ver repositorio
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Grid2>
                        ))}
                    </Grid2>
                </Box>

                <Divider sx={{ bgcolor: "gray", my: 4 }} />

                {/*//!  Contacto */}
                <Box
                    textAlign="center"
                    className="animate__animated animate__fadeInUp"
                    sx={{ pb: 4 }}
                >
                    <Typography variant="h4" color="secondary.light">
                        Contacto
                    </Typography>
                    <Typography sx={{mt: 1}}>
                        Email:{" "}
                        <Link
                            href="mailto:s.guzman.1335@gmail.com"
                            color="primary.light"
                        >
                            s.guzman.1335@gmail.com
                        </Link>
                    </Typography>
                    <Typography sx={{mt: 0.5}}>
                        Teléfono:{" "}
                        <Link href="tel:+51924251590" color="primary.light">
                            +51 924 251 590
                        </Link>
                    </Typography>
                    <Button
                        href="src\docs\CV.pdf"
                        download
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 2 }}
                    >
                        Descargar CV
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};
