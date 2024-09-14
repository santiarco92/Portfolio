import React from "react";
import Box from '@mui/material/Box';
import ExperienceList from "../info/experience"
import Grid from '@mui/material/Grid2';


function Experience() {

        // Function to create an experience Grid component
    function createExperience(experience) {
        
        return (
        <Grid
            key={experience.id} // Use experience.id as the key for the Grid component
            data-aos={experience.aos} // Set AOS animation attribute for the Grid component
            xs={12} sm={3} md={3} // Define responsive grid sizes: full width on extra-small screens, 3 columns on small and medium screens
            className="exp-container" // Apply custom CSS class to the Grid component
        >
            <h3>{experience.jobTitle}</h3> {/* Display the job title */}
            <h4>{experience.company} {experience.date}</h4> {/* Display the company and date */}
            <ul>
            {experience.description.map((description, index) => ( // Map through experience.description array and create list items
                <li key={index}>{description}</li> // Use index as the key for each list item and display description
            ))}
            </ul>
        </Grid>
        );
    }

    return (
        <Box className="experience"> {/* Wrapper Box for the Experience section */}
        <h2 data-aos="zoom-out">Experience</h2> {/* Header for the experience section with AOS animation */}
        <Box>
            <Grid 
            className="experience-container" // Apply custom CSS class to the Grid container
            container spacing={2} // Set up a grid container with spacing between items
            >
            {ExperienceList.map(createExperience)} {/* Map through ExperienceList array and create a Grid component for each */}
            </Grid>
        </Box>
        </Box>
    );
}


export default Experience;