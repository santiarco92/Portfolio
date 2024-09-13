import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import softSkills, {techSkills} from "../info/skills"
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
                        color: 'white', // Cambia el color principal del slider (thumb, track, etc.)
                        '& .MuiSlider-thumb': {
                          width: 10, 
                          height: 10, 
                          backgroundColor: '7BAEBD', // Color del círculo (thumb)
                        },
                        '& .MuiSlider-track': {
                          backgroundColor: '#7BAEBD', // Color de la línea del progreso (track)
                        },
                        '& .MuiSlider-rail': {
                          backgroundColor: '#c8cac8', // Color de la línea de fondo (rail)
                        },
                    }}/>
                </Box>

            </li>

    }

    


    function createEducation(education) {

        const handlePaperClick = () => {
            if (education.link) {
                window.open(education.link, "", "noopener noreferrer");
            } else {
                console.error("El enlace es nulo o indefinido");
            }
        };


        return  <Paper 
                    data-aos={education.aos}
                    key={education.id}
                    elevation={3} 
                    className="paper"
                    onClick={handlePaperClick}
                    sx={{
                        cursor: 'pointer', // Cambia el cursor para mostrar que es clicable
                        position: 'relative', // Posiciona para poder agregar el tooltip
                        backgroundColor: 'rgba(24, 34, 37, 0.3)',
                        boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)", 
                        '&:hover::after': {
                        content: '"Click To View Certificate"', // Muestra el mensaje al hacer hover
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: 'rgba(178, 158, 132, 0.8)',
                        color: '#182225',
                        fontWeight:"bold",
                        padding: '5px',
                        borderRadius: '5px',
                        fontSize: '13px',
                                        }
                        }}
                    title="Click to view certificate" // Muestra el mensaje en el tooltip por defecto
                    >
                       
                <h3>{education.title}</h3>
                <h4>{education.institution} {education.date}</h4>
                <p>{education.degree}</p>
                        
               
            </Paper>
    }



    return <Box className="educantion">
                <div className="skills">
                    <div 
                        className="skill-container" 
                        data-aos="zoom-out">
                        <h2>Skills</h2>
                        <Box className="t-skills-container">
                            <ul>
                            {softSkills.map(createSkill)}
                            </ul>
                        </Box>
                    </div>
                    <div 
                        className="skill-container"
                        data-aos="zoom-out">
                        <h2 data-aos="zoom-out">Technical Skills</h2>
                        <div className="t-skills-container">
                            <ul>
                                {techSkills.map(createSkill)}
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="education-container">
                <h2 data-aos="zoom-out">Education</h2>
                <Box className="paper-container">
                    {education.map(createEducation)}
                </Box>
                
                </div>
        </Box>
}

export default Education;