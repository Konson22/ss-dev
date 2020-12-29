import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Team from '../Team/Team'

import { Row, Col, Card, Button} from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaUser } from 'react-icons/fa'
import './Main.css'

export default function Main() {

    return (
        <div>
            <Header />
            <div className="container">
                <div className="main-container">
                    <main className="main-wraper">
                        <div className="main-content about-wraper">
                            <h3>who are we?</h3>
                            <p>we do a custom websites and web application development services, you get high-performing, intuitive, and secure web solutions that support business processes and serve users globally. A custom web app that’s tailored to your needs increases workflow productivity and supports business growth. I can help you conceive, design, and develop your custom web application.application guidelines and standards. </p>
                            <h3>who are we?</h3>
                            <p>we do a custom websites and web application development services, you get high-performing, intuitive, and secure web solutions that support business processes and serve users globally. A custom web app that’s tailored to your needs increases workflow productivity and supports business growth. I can help you conceive, design, and develop your custom web application.application guidelines and standards. </p>
                        </div>
                        
                        <div className="main-content projects">
                            <div className="title-wraper text-center">
                                <h1>Projects</h1>
                            </div>
                            <div className="projects-wraper">
                                <Row>
                                    <Col md={6}>
                                    <div className="project-content">
                                        <img src={process.env.PUBLIC_URL + '/images/drink-864958__340.jpg' } />
                                        <div className="project-text">
                                            <h3>Web based application</h3>
                                            <p>right technologies and web application frameworks that will allow developers to build and maintain complex web application projects using a fast.</p>
                                            <Link>https://www.konsonak.com</Link>
                                        </div>
                                    </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="project-content">
                                            <img src={process.env.PUBLIC_URL + '/images/pexels-brett-sayles-2881229.jpg' } />
                                            <div className="project-text">
                                                <h3>Web based application</h3>
                                                <p>right technologies and web application frameworks that will allow developers to build and maintain complex web application projects using a fast.</p>
                                                <Link>https://www.konsonak.com</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="project-content">
                                            <img src={process.env.PUBLIC_URL + '/images/istockphoto-1073009100-612x612.jpg' } />
                                            <div className="project-text">
                                                <h3>Web based application</h3>
                                                <p>right technologies and web application frameworks that will allow developers to build and maintain complex web application projects using a fast.</p>
                                                <Link>https://www.konsonak.com</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="project-content">
                                            <img src={process.env.PUBLIC_URL + '/images/oj.png' } />
                                            <div className="project-text">
                                                <h3>Web based application</h3>
                                                <p>right technologies and web application frameworks that will allow developers to build and maintain complex web application projects using a fast.</p>
                                                <Link>https://www.konsonak.com</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="text-right mt-4">
                                    <Button>See More</Button>
                                </div>
                            </div>
                        </div>
                        <div className="main-content expert">
                            <Team />
                        </div>
                    </main>
                    {/* <div className="right-side-wraper">
                        <Sidebar />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
