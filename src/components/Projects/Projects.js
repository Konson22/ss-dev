import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ProjectCard from './ProjectCard'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaArrowRight } from 'react-icons/fa'
import './Projects.css'

function Projects() {
    const [projects, setProjects] = useState({
        status:false,
        data:null,
        error:false
    })

    useEffect(() => {
        fetch('https://ssdev-api.herokuapp.com/projects').then(res => res.json()).then(data => setProjects({
            status:true,
            data:data,
            error:false
        }))
    }, [])

    
    return (
        <div className="main-container projects-container">
            <Container>
                <div className="title-wraper text-center">
                    <h1>Our team work</h1>
                </div>
                <div className="projects-wraper">
                    <ProjectCard projects={ projects }/>
                    <div className="text-right mt-4">
                        <Button>See More</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Projects
