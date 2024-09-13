import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import DevProjects from "../info/devprojects";
import Grid from '@mui/material/Grid2';

function Devprojects() {
  



  function createProject(project) {
    return (<Grid xs={12} sm={3} md={3}>
                <Card
                  data-aos={project.aos} 
                  className="card-project"
                  key={project.id}
                  sx={{
                      maxWidth: 370,
                      boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)", 
                      backgroundColor: 'rgba(24, 34, 37, 0.2)',
                      transition: "0.3s",
                      height: 620,
                      '&:hover::after': {
                                  content: '"Click To Open Repository"', // Muestra el mensaje al hacer hover
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
                  <CardActionArea 
                    onClick={() => window.open(project.url, "_blank")}
                    disabled={!project.url}>
                    <CardMedia
                      className="img-container"
                      component="img"
                      height="250"
                      loading="lazy"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent>
                      <h3 className="card-title">{project.title}</h3>
                      <div className="project-description">
                        <h5>Description:</h5>
                        <p>{project.description}</p>
                      </div>
                      <div className="project-achivments">
                          <h5>Stack:</h5>
                          <p>
                             {project.stack}
                          </p>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
    );
  }

  return (
    <div className="projects">
      <h2 data-aos="fade-zoom-in">Web Projects Developed</h2>
      <Box>
        <Grid 
              container spacing={2}
              className="project-container">
          {DevProjects.map(createProject)}
        </Grid>
      </Box>
    </div>
  );
}


export default Devprojects;
