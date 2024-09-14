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

 // State to track the currently expanded card
  const [expandedCard, setExpandedCard] = useState(null);

  
  const handleExpandClick = (id) => { // Function to handle expanding and collapsing a card
    setExpandedCard(expandedCard === id ? null : id);  // Toggle the expanded card based on the current state
  }; 

 
  function createProject(project) { // Function to create a project card
  
    const isExpanded = expandedCard === project.id;  // Determine if the current card is expanded


    return ( <Grid 
              className="card-container"
              xs={12} sm={3} md={3}> {/* Grid item with responsive widths */}
                <Card
                  className="card-project" // CSS class for styling the card
                  key={project.id} // Unique key for the card
                  sx={{       
                    maxWidth: 345, // Maximum width of the card
                    backgroundColor: 'rgba(24, 34, 37, 0.2)', // Background color of the card
                    boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)", // Shadow for the card
                    transition: "0.3s", // Transition duration for hover effects
                    transform: isExpanded ? "scale(1.05)" : "scale(1)", // Scale up the card when expanded
                    '&:hover::after': { // Pseudo-element for hover effect
                      content: '"Click To Expand"', // Text displayed on hover
                      position: 'absolute', // Positioning for the pseudo-element
                      top: '10px', // Position from the top
                      left: '10px', // Position from the left
                      backgroundColor: '#b29e84', // Background color of the pseudo-element
                      color: '#182225', // Text color
                      fontWeight:"bold", // Font weight
                      padding: '5px', // Padding around the text
                      borderRadius: '5px', // Rounded corners
                      fontSize: '13px', // Font size
                    }
                  }}
                >
                  <CardActionArea onClick={() => handleExpandClick(project.id)}> {/* Clickable area to expand/collapse the card */}
                    <CardMedia
                      className="img-container" // CSS class for styling the image container
                      component="img" // Specify that this is an image component
                      height="250" // Height of the image
                      loading="lazy" // Lazy loading of the image
                      image={project.img} // Source of the image
                      alt={project.title} // Alt text for the image
                    />
                    <CardContent>
                    <h3 className="card-title">{project.title}</h3> {/* Title of the project */}
                    <div className="project-description"> {/* Description section */}
                      <h5>Description:</h5> {/* Description heading */}
                      <p>{project.description}</p> {/* Description text */}
                    </div>
                        {/* Conditionally render additional information if the card is expanded */}
                      {isExpanded && ( 
                        <>
                          <div className="project-tech"> {/* Technologies section */}
                            <h5>Technologies:</h5> {/* Technologies heading */}
                            <p>{project.technologies}</p> {/* Technologies text */}
                          </div>
                          <div className="project-achivments"> {/* Achievements section */}
                            <h5>Achievements:</h5> {/* Achievements heading */}
                            <ul> {/* List of achievements */}
                              {/* Map through achievements */}
                              {project.achivements.map((achievement, index) => (
                                <li key={index}>{achievement}</li> 
                              ))}
                            </ul>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </CardActionArea>
                  <CardActions className="card-btn"> {/* Actions at the bottom of the card */}
                    <Button
                      variant="contained" // Button style
                      size="small" // Button size
                      color="primary" // Button color
                      onClick={() => window.open(project.link, "_blank")} // Open project link in a new tab
                      disabled={!project.link} // Disable button if no link is provided
                      sx={{
                        color: "#7BAEBD", // Button text color
                        backgroundColor: "#202D31", // Button background color
                        "&.Mui-disabled": {
                          color: "transparent", // Text color when disabled
                          backgroundColor: "transparent", // Background color when disabled
                        },
                        "&:hover": {
                          backgroundColor: "transparent", // Background color on hover
                        },
                        "&:active": {
                          backgroundColor: "transparent", // Background color when button is pressed
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
