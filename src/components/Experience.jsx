import React from "react";
import Box from '@mui/material/Box';
import ExperienceList from "../info/experience"
import Grid from '@mui/material/Grid2';


function Experience() {

    function createExperience(experience) {

        return <Grid
                key={experience.id}
                data-aos={experience.aos} 
                xs={12} sm={3} md={3}
                className="exp-container">
        <h3>{experience.jobTitle}</h3>
        <h4>{experience.company} {experience.date}</h4>
        <ul>
            {experience.description.map((description, index) => (
                <li key={index}>{description}</li>
             ))}
        </ul>
        </Grid>
    }






    return <Box className="experience">
                <h2 data-aos="zoom-out">Experience</h2>
                <Box>
                    <Grid 
                        className= "experience-container"
                        container spacing={2}
                        >
                            {ExperienceList.map(createExperience)}
                    </Grid>
                </Box>
            </Box>
    
   
}


export default Experience;