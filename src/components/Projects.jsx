import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import projects from "../info/projects";
import Grid from '@mui/material/Grid2';

function Projects() {
  const [expandedCard, setExpandedCard] = useState(null);

  // Maneja el clic en la tarjeta
  const handleExpandClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id); // Expande o colapsa la tarjeta seleccionada
  };

  function createProject(project) {
    const isExpanded = expandedCard === project.id; // Determina si esta tarjeta está expandida

    return ( <Grid xs={12} sm={3} md={3}>
                <Card
                  className="card-project"
                  key={project.id}
                  sx={{
                      maxWidth: 345,
                      backgroundColor: 'rgba(24, 34, 37, 0.2)',
                      boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)",
                      transition: "0.3s",
                      transform: isExpanded ? "scale(1.05)" : "scale(1)", // Se ajusta el tamaño de la tarjeta cuando se expande
                      '&:hover::after': {
                                  content: '"Click To Expand"', // Muestra el mensaje al hacer hover
                                  position: 'absolute',
                                  top: '10px',
                                  left: '10px',
                                  backgroundColor: '#b29e84',
                                  color: '#182225',
                                  fontWeight:"bold",
                                  padding: '5px',
                                  borderRadius: '5px',
                                  fontSize: '13px',
                                                  }
                  }}
                >
                  <CardActionArea onClick={() => handleExpandClick(project.id)}>
                    <CardMedia
                      className="img-container"
                      component="img"
                      height="250"
                      loading="lazy"
                      image={project.img}
                      alt={project.title}
                    />
                    <CardContent>
                      <h3 className="card-title">{project.title}</h3>
                      <div className="project-description">
                        <h5>Description:</h5>
                        <p>{project.description}</p>
                      </div>

                      {/* Mostrar solo si la tarjeta está expandida */}
                      {isExpanded && (
                        <>
                          <div className="project-tech">
                            <h5>Technologies:</h5>
                            <p>{project.technologies}</p>
                          </div>
                          <div className="project-achivments">
                            <h5>Achievements:</h5>
                            <ul>
                              {project.achivements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </CardActionArea>
                  <CardActions className="card-btn">
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      onClick={() => window.open(project.link, "_blank")}
                      disabled={!project.link}
                      sx={{
                        color: "#7BAEBD",
                        backgroundColor: "#202D31",
                        "&.Mui-disabled": {
                          color: "transparent", // Color de texto cuando está deshabilitado
                          backgroundColor: "transparent", // Color de fondo cuando está deshabilitado
                        },
                        "&:hover": {
                          backgroundColor: "transparent", // Color de fondo en hover
                        },
                        "&:active": {
                          backgroundColor: "transparent", // Color de fondo al hacer clic
                        },
                      }}
                    >
                      View Project
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
      
    );
  }

  return (
  
      
      <Box className="projects" data-aos="zoom-out">
      <h2 >Projects Managed</h2>
        <Grid 
            container spacing={2}
            className="project-container">
        {projects.map(createProject)}   
        </Grid>
      </Box>
  
  );
}

export default Projects;
