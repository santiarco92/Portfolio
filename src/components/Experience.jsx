import React from "react";
import Box from '@mui/material/Box';
import ExperienceList from "../info/experience"


function Experience() {

    function createExperience(experience) {

        return <div className="exp-container">
        <h3>{experience.jobTitle}</h3>
        <h4>{experience.company} {experience.date}</h4>
        <ul>
            {experience.description.map((description, index) => (
                <li key={index}>{description}</li>
             ))}
        </ul>
        </div>
    }






    return <Box className="experience">
                <h2>Experience</h2>
                <Box className= "experience-container">
                
                    {ExperienceList.map(createExperience)}
                </Box>
            </Box>
    
   
}


export default Experience;