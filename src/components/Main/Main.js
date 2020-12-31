import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Team from '../Team/Team'
import Services from '../Services/Services'
import ProjectCard from '../Projects/ProjectCard'



import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaUser } from 'react-icons/fa'
import './Main.css'

export default function Main() {
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

    if(projects.data){
        projects.data.forEach((project, index) => {
            
        });
    }
    return (
        <div>
            <Header />
            <div className="container">
                <div className="main-container about-wraper">
                    <div className="title-wraper text-cener">
                        <h1>Who are we?</h1>
                    </div>
                    <p>we do a custom websites and web application development services, you get high-performing, intuitive, and secure web solutions that support business processes and serve users globally. A custom web app that’s tailored to your needs increases workflow productivity and supports business growth. I can help you conceive, design, and develop your custom web application.application guidelines and standardswe do a custom websites and web application development services, you get high-performing, intuitive, and secure web solutions that support business processes and serve users globally. A custom web app that’s tailored to your needs increases workflow productivity and supports business growth. I can help you conceive, design, and develop your custom web application.application guidelines and standards. </p>
                </div>
            </div>
            <Services />

            <div className="main-container projects-container">
                <Container>
                <div className="title-wraper text-center">
                    <h1>Projects</h1>
                </div>
                    <ProjectCard projects={ projects }/>
                </Container>
            </div>

            <Team />
        </div>
    )
}
