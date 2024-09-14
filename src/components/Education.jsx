import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import softSkills, {techSkills} from "../info/skills"
import Paper from '@mui/material/Paper';
import education from "../info/education";






function Education() {


    function createSkill(skill) {

        return (
          <li key={skill.id}> {/* Use skill.id as the key for list items */}
            <p>{skill.skill}</p> {/* Display the name of the skill */}
            <Box sx={{ width: 100 }}> {/* Container for the Slider component */}
              <Slider 
                defaultValue={skill.level} // Set the default value of the slider
                step={1} // Set step size for the slider
                marks // Enable marks on the slider
                min={1} // Set minimum value of the slider
                max={5} // Set maximum value of the slider
                disabled // Disable the slider to make it read-only
                sx={{
                  color: 'white', // Set the color of the slider
                  '& .MuiSlider-thumb': { // Style the slider thumb
                    width: 10, // Set width of the thumb
                    height: 10, // Set height of the thumb
                    backgroundColor: '7BAEBD', // Set background color of the thumb
                  },
                  '& .MuiSlider-track': { // Style the slider track
                    backgroundColor: '#7BAEBD', // Set background color of the track
                  },
                  '& .MuiSlider-rail': { // Style the slider rail
                    backgroundColor: '#c8cac8', // Set background color of the rail
                  },
                }}
              />
            </Box>
          </li>
        );
      }
    
      // Function to create an education Paper component
      function createEducation(education) {
    
        // Function to handle click on the Paper component
        const handlePaperClick = () => {
            try {
              if (education.link) {
                window.open(education.link, "_blank", "noopener noreferrer");
              } else {
                console.error("The link is null or undefined");
              }
            } catch (error) {
              console.error("Error opening the link:", error);
            }
          };
    
        return (
          <Paper 
            data-aos={education.aos} // Set AOS animation attribute for the Paper component
            key={education.id} // Use education.id as the key for the Paper component
            elevation={3} // Set shadow elevation for the Paper component
            className="paper" // Apply custom CSS class to the Paper component
            onClick={handlePaperClick} // Attach click handler to open link
            sx={{
              cursor: 'pointer', // Set cursor to pointer to indicate it's clickable
              position: 'relative', // Set position to relative for absolute positioning of hover content
              backgroundColor: 'rgba(24, 34, 37, 0.3)', // Set background color with transparency
              boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)", // Apply shadow effect to the Paper component
              '&:hover::after': { // Styles to apply when the Paper component is hovered
                content: '"Click To View Certificate"', // Display text on hover
                position: 'absolute', // Position text absolutely
                top: '10px', // Distance from top
                left: '10px', // Distance from left
                backgroundColor: 'rgba(178, 158, 132, 0.8)', // Background color of the hover text
                color: '#182225', // Text color
                fontWeight: "bold", // Set font weight to bold
                padding: '5px', // Add padding around text
                borderRadius: '5px', // Round the corners of the text background
                fontSize: '13px', // Set font size
              }
            }}
            title="Click to view certificate" // Set title attribute for accessibility
          >
            <h3>{education.title}</h3> {/* Display the education title */}
            <h4>{education.institution} {education.date}</h4> {/* Display the institution and date */}
            <p>{education.degree}</p> {/* Display the degree */}
          </Paper>
        );
      }
    
      return (
        <Box className="education"> {/* Wrapper Box for the Education section */}
          <div className="skills"> {/* Wrapper div for skills section */}
            <div 
              className="skill-container" 
              data-aos="zoom-out"> {/* Container for soft skills with AOS animation */}
              <h2>Skills</h2> {/* Header for the skills section */}
              <Box className="t-skills-container"> {/* Container for the list of soft skills */}
                <ul>
                  {softSkills.map(createSkill)} {/* Map through softSkills array and create a list item for each */}
                </ul>
              </Box>
            </div>
            <div 
              className="skill-container"
              data-aos="zoom-out"> {/* Container for technical skills with AOS animation */}
              <h2 data-aos="zoom-out">Technical Skills</h2> {/* Header for technical skills section */}
              <div className="t-skills-container"> {/* Container for the list of technical skills */}
                <ul>
                  {techSkills.map(createSkill)} {/* Map through techSkills array and create a list item for each */}
                </ul>
              </div>
            </div>
          </div>
          <div className="education-container"> {/* Container for education section */}
            <h2 data-aos="zoom-out">Education</h2> {/* Header for the education section */}
            <Box className="paper-container"> {/* Container for Paper components */}
              {education.map(createEducation)} {/* Map through education array and create a Paper component for each */}
            </Box>
          </div>
        </Box>
      );
}

export default Education;