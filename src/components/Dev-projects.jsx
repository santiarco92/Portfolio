import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import DevProjects from "../info/devprojects";
import Grid from '@mui/material/Grid2';

function Devprojects() {


 
 // Function to create a project card
 function createProject(project) {  

  return (
      <Grid xs={12} sm={3} md={3} key={project.id}> {/* Define the grid layout for each project card */}
        <Card
          data-aos={project.aos} // Set AOS animation attribute for the card
          className="card-project" // Apply custom CSS class to the card
          sx={{       
            maxWidth: 370, // Set maximum width of the card
            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)", // Apply shadow effect to the card
            backgroundColor: 'rgba(24, 34, 37, 0.2)', // Set background color with transparency
            transition: "0.3s", // Set transition duration for card changes
            height: 620, // Set height of the card
            '&:hover::after': { // Styles to apply when the card is hovered
              content: '"Click To Open Repository"', // Display text on hover
              position: 'absolute', // Position text absolutely
              top: '10px', // Distance from top
              left: '10px', // Distance from left
              backgroundColor: '#b29e84', // Background color of the text
              color: '#182225', // Text color
              fontWeight: "bold", // Set font weight to bold
              padding: '5px', // Add padding around text
              borderRadius: '5px', // Round the corners of the text background
              fontSize: '13px', // Set font size
            }
          }}
        >
          <CardActionArea 
            onClick={() => window.open(project.url, "_blank")} // Open project URL in a new tab when clicked
            disabled={!project.url} // Disable action if URL is not provided
          >
            <CardMedia
              className="img-container" // Apply custom CSS class to the image container
              component="img" // Set component type to img
              height="250" // Set height of the image
              loading="lazy" // Enable lazy loading for the image
              image={project.image} // Set image source from project data
              alt={project.title} // Set alt text for the image
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
  <div className="projects"> {/* Wrapper div for the projects section */}
    <h2 data-aos="fade-zoom-in">Web Projects Developed</h2> {/* Header for the section with fade-zoom-in animation */}
    <Box>
      <Grid 
        container spacing={2} // Set spacing between grid items
        className="project-container"> {/* Apply custom CSS class to the grid container */}
        {DevProjects.map(createProject)} {/* Map through DevProjects array and create a project card for each */}
      </Grid>
    </Box>
  </div>
);
}


export default Devprojects;
