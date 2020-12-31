import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import './Services.css'

export default function Services() {
    return (
        <div className="main-container">
            <Container>
                <div className="title-wraper text-center">
                    <h1>Services</h1>
                </div>
                <Row>
                    <Col md={4}>
                        <div className="service-wraper text-center shadow">
                            <div className="service-header">
                                <h3>Open Source </h3>
                            </div>
                            <div className="service-body">
                                <p>We do a custom web application development services, you get high-performing, intuitive, and secure web solutions that support business processes and serve users globally. A custom web app that’s tailored to your needs increases workflow productivity and supports business growth</p>
                            </div>
                            <div className="service-body">
                                <button className="btn read-more-btn">Read more</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="service-wraper">
                            <div className="service-header text-center">
                                <h3>Artificial Intelligence </h3>
                            </div>
                            <div className="service-body">
                                <p>ecure web solutions that support business processes and serve users globally. A custom web app that’s tailored to your needs increases workflow productivity and supports business growth</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="service-wraper">
                            <div className="service-header text-center">
                                <h3>Web developement</h3>
                            </div>
                            <div className="service-body">
                                <p>We do a custom web application development services, you get high-performing, intuitive, and secure web solutions that support business processes and serve users globally. A custom web app that’s tailored to your needs increases workflow productivity and supports business growth</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
