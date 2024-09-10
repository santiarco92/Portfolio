import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import projects from "../info/projects"





function Projects () {

    
    
    function createProject(project) {

        return <Card sx={{ maxWidth: 345, backgroundColor: '#182225' }}>
        <CardActionArea>
            <CardMedia
                className="img-container"
                component="img"
                height="250"
                image= {project.img}
                alt= {project.title}
                />
            <CardContent>
                <h3 className="card-title">{project.title}</h3>
                <div className="project-tech">
                    <h5>Technologies: </h5>
                    <p>{project.technologies}</p>
                </div>
                <div className="project-achivments">
                    <h5>Achivements: </h5>
                    <ul>
                    {project.achivments.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                    </ul>
                </div>
                <div className="project-description">
                    <h5>Description: </h5>
                    <p>{project.description}</p>
                </div>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
        </CardActions>
    </Card>
    }

    return <div className="projects">
        <h2>Projects Managed</h2>
        <Box className="project-container">
            {projects.map(createProject)}
        </Box>
        
    </div>
}

export default Projects;