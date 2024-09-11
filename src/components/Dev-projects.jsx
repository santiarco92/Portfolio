import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import DevProjects from "../info/devprojects";

function Devprojects() {
  const [expandedCard, setExpandedCard] = useState(null);

  // Maneja el clic en la tarjeta
  const handleExpandClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id); // Expande o colapsa la tarjeta seleccionada
  };

  function createProject(project) {
    const isExpanded = expandedCard === project.id; // Determina si esta tarjeta está expandida

    return (
      <Card
        className="card-project"
        key={project.id}
        sx={{
            maxWidth: 345,
            backgroundColor: 'rgba(24, 34, 37, 0.2)',
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
            image={project.image}
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
                <div className="project-achivments">
                  <h5>Stack:</h5>
                  <ul>
                    {project.stack.map((stack, index) => (
                      <li key={index}>{stack}</li>
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
            onClick={() => window.open(project.url, "_blank")}
            disabled={!project.url}
            sx={{
              color: "#7BAEBD",
              backgroundColor: "#202D31",
              "&.Mui-disabled": {
                color: "#182225", // Color de texto cuando está deshabilitado
                backgroundColor: "#182225", // Color de fondo cuando está deshabilitado
              },
              "&:hover": {
                backgroundColor: "#253439", // Color de fondo en hover
              },
              "&:active": {
                backgroundColor: "#b29e84", // Color de fondo al hacer clic
              },
            }}
          >
            View Project
          </Button>
        </CardActions>
      </Card>
    );
  }

  return (
    <div className="projects">
      <h2>Web Projects Developed</h2>
      <Box className="project-container">
        {DevProjects.map(createProject)}
      </Box>
    </div>
  );
}

export default Devprojects;
