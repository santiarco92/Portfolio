import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import softSkills, {techSkills} from "../info/skills"






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
                        '& .MuiSlider-thumb': {
                            width: 10, 
                            height: 10, 
                        } 
                    }}/>
                </Box>

            </li>

    }



    return <div>
            <div className="skills">
                <div className="softskills">
                    <h3>Skills</h3>
                    <div className="s-skills-container">
                        <ul>
                           {softSkills.map(createSkill)}
                        </ul>
                    </div>
                </div>
                <div className="technical-skills">
                <h3>Technical Skills</h3>
                    <div className="s-skills-container">
                        <ul>
                            {techSkills.map(createSkill)}
                        </ul>
                    </div>

                </div>
            </div>
        <div className="education">
            <h5>Field</h5>
            <p>year</p>
            <p>link to diploma</p>
        </div>
    </div>
}

export default Education;