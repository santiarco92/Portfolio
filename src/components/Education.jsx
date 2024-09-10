import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import softSkills, {techSkills} from "../info/skills"
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import education from "../info/education";






function Education() {


    function createSkill (skill){

        return <li>
                <p>{skill.skill}</p>
                <Box sx={{ width: 100 }}>
                <Slider 
                    key={skill.id}
                    defaultValue={skill.level} 
                    step={1} 
                    marks min={1} 
                    max={5} disabled 
                    sx={{
                        color: '#b29e84', // Cambia el color principal del slider (thumb, track, etc.)
                        '& .MuiSlider-thumb': {
                          width: 10, 
                          height: 10, 
                          backgroundColor: '#b29e84', // Color del círculo (thumb)
                        },
                        '& .MuiSlider-track': {
                          backgroundColor: '#b29e84', // Color de la línea del progreso (track)
                        },
                        '& .MuiSlider-rail': {
                          backgroundColor: '#b29e84', // Color de la línea de fondo (rail)
                        },
                    }}/>
                </Box>

            </li>

    }

    


    function createEducation(education) {

        const handlePaperClick = () => {
                window.open(education.link, "", "noopener noreferrer");
            };


        return <div className="paper-container">
        <Paper 
        elevation={3} 
        className="paper"
        onClick={handlePaperClick}
        >
            <h3>{education.title}</h3>
            <h4>{education.institution} {education.date}</h4>
            <p>{education.degree}</p>
            </Paper> 
    </div>

    }



    return <div>
            <div className="skills">
                <div className="softskills">
                    <h2>Skills</h2>
                    <div className="t-skills-container">
                        <ul>
                           {softSkills.map(createSkill)}
                        </ul>
                    </div>
                </div>
                <div className="technical-skills">
                    <h2>Technical Skills</h2>
                    <div className="t-skills-container">
                        <ul>
                            {techSkills.map(createSkill)}
                        </ul>
                    </div>

                </div>
            </div>
        <div className="education">
            <h2>Education</h2>
            {education.map(createEducation)}
        </div>
    </div>
}

export default Education;