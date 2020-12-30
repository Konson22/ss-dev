import React from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaArrowRight } from 'react-icons/fa' 

export default function ProjectCard({ projects }) {
    let content
    if(projects.status){
        content = projects.data.map(project => (
            <Col md={4} key={project.id}>
                        <div className="project-content">
                            <img src={process.env.PUBLIC_URL + '/images/drink-864958__340.jpg' } />
                            <div className="project-text">
                                <h3>{ project.title }</h3>
                                <p>{ project.discription }</p>
                                <address>
                                    <a href="https://test.com" target="_blank">{ project.projects_link }</a>
                                </address>
                            </div>
                        </div>
            </Col>
        ))
    }

    return (
        <Row>
            { content }
        </Row>
    )
}
