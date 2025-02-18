import React from "react";
import { CssBaseline, Container, Box, Typography, Link, Button, Divider, Card, CardContent, CardMedia, Grid2 } from "@mui/material";
import "animate.css";


export const Portfolio = () => {
    const proyectos=[{
        title: "Gif App (Básico)",
        image: "https://i.gifer.com/origin/93/935d72c7bc35828ea93b5898691f28fd_w200.gif", 
        link: "https://graceful-crisp-60f808.netlify.app/",
        repo: "https://github.com/FrogSyntax/react-gif-expert"
      }, {
        title: "E-commerce UI",
        image: "https://via.placeholder.com/300", 
        link: "#",
        repo: "https://github.com/FrogSyntax/react-gif-expert"
      }, {
        title: "App de Tareas",
        image: "https://via.placeholder.com/300", 
        link: "#",
        repo: "https://github.com/FrogSyntax/react-gif-expert"
      }]

      // const onClick = () => {
      //   alert("Función no disponible")
      // }
  return (    
  <Box sx={{ bgcolor: "#212121", color: "white", minHeight: "100vh", p: 4, backgroundImage: `url(https://media.tenor.com/TZaIBNauQfAAAAAM/stars-galaxy.gif), linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1))`, backgroundBlendMode: "overlay"}}>
    <CssBaseline />
    <Container>
      {/* Header */}
      <Box textAlign="center" className="animate__animated animate__bounceInDown" sx={{ py: 4 }}>
        <Typography variant="h2" fontWeight="bold" color="primary.light">Sebastián Guzmán</Typography>
        <Typography variant="h5" color="gray">Desarrollador de Software | Backend & Frontend</Typography>
      </Box>
      
      <Divider sx={{ bgcolor: "gray", my: 4 }} />
      
      {/* Sobre Mí */}
      <Box className="animate__animated animate__fadeInLeft" sx={{ mb: 4 }}>
        <Typography variant="h4" color="secondary.light">Sobre Mí</Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          Soy estudiante de 9no ciclo de Ingeniería de Sistemas en la Universidad de Lima con una sólida base en desarrollo backend y frontend.
          Me apasiona la arquitectura de software, las metodologías ágiles y la creación de soluciones tecnológicas escalables. 
          Combino mis habilidades técnicas con disciplina y liderazgo, adquiridos a través de mi trayectoria en el deporte de alto rendimiento.
        </Typography>
      </Box>
      
      <Divider sx={{ bgcolor: "gray", my: 4 }} />
      
      {/* Habilidades */}
      <Box className="animate__animated animate__fadeInRight" sx={{ mb: 4 }}>
        <Typography variant="h4" color="secondary.light">Habilidades</Typography>
        <Grid2 container spacing={2} mt={2}>
          {["Python", "JavaScript", "TypeScript", "SQL", "Node.js", "React", "Docker", "Git/GitHub", "Jest"].map((skill) => (
            <Grid2 item xs={12} sm={6} key={skill}>
              <Typography variant="h6">✅ {skill} (Avanzado)</Typography>
            </Grid2>
          ))}
        </Grid2>
      </Box>
      
      <Divider sx={{ bgcolor: "gray", my: 4 }} />
      
      {/* Experiencia */}
      <Box className="animate__animated animate__fadeInLeft" sx={{ mb: 4 }}>
        <Typography variant="h4" color="secondary.light">Experiencia</Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" fontWeight="bold">Programador Backend - CUNI</Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Desarrollo del MVP para una plataforma educativa gamificada, reduciendo la brecha de acceso universitario.
            Implementación de soluciones escalables con Node.js y bases de datos SQL.
            Trabajo en equipo bajo metodología SCRUM, gestionando tareas con Jira.
          </Typography>
        </Box>
      </Box>
      
      <Divider sx={{ bgcolor: "gray", my: 4 }} />
      
      {/* Proyectos */}
      <Box className="animate__animated animate__fadeInUp" sx={{ mb: 4 }}>
        <Typography variant="h4" color="secondary.light">Proyectos Frontend</Typography>
        <Grid2 container spacing={2} mt={2}>
          {proyectos.map((project, index) => (
            <Grid2 item xs={12} sm={4} key={index}>
              <Card sx={{ bgcolor: "#333", color: "white" }}>
                <CardMedia component="img" height="140" image={project.image} alt={project.title} />
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <hr />
                  <Link href={project.link} color="primary.light" target="_blank" underline="hover">Ver Proyecto</Link>
                  <Link href={project.repo} ml={2} color="primary.light" target="_blank" underline="hover">Ver repositorio</Link>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
      
      <Divider sx={{ bgcolor: "gray", my: 4 }} />
      
      {/* Contacto */}
      <Box textAlign="center" className="animate__animated animate__fadeInUp" sx={{ pb: 4 }}>
        <Typography variant="h4" color="secondary.light">Contacto</Typography>
        <Typography>Email: <Link href="mailto:s.guzman.1335@gmail.com" color="primary.light">s.guzman.1335@gmail.com</Link></Typography>
        <Typography>Teléfono: <Link href="tel:+51924251590" color="primary.light">+51 924 251 590</Link></Typography>
        <Button href="src\docs\CV.pdf" download variant="contained" color="secondary" sx={{ mt: 2 }}>Descargar CV</Button>
      </Box>
    </Container>
  </Box>
  )
};