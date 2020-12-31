import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Card, Row, Col, Form } from 'react-bootstrap'

import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaWhatsapp, FaUser } from 'react-icons/fa'

import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="contact-wraper">
                    <p>frameworks that will allow developers to build and maintain complex web application projects using a fast.</p>
                    <Row>
                        <Col md={6}>
                            <Form>
                                <h2>Let's get in touch</h2>
                                <p>Do you need website or web application or do you have website that need to be updated? feel free to contact us and we will valid you with quotation. </p>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Full name"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="E-mail address"/>
                                </Form.Group>
                                <Form.Group>
                                    <textarea className="form-control"></textarea>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control className="btn btn-info" type="submit" value="Send"/>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col md={6}></Col>
                    </Row>
                </div>
                <div className="footer-wraper">
                    <div className="footer-content">
                        <a href="#">SSDEV</a>
                    </div>
                    <div className="footer-content">
                        <ul>
                            <li><h4>Navigations</h4></li>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Projects</li>
                            <li>Team</li>
                        </ul>
                    </div>
                    <div className="footer-content">
                        <ul>
                            <li><h4>About</h4></li>
                            <li>Who are we?</li>
                            <li>What we do</li>
                            <li>Our mission</li>
                            <li>Our services</li>
                        </ul>
                    </div>
                    <div className="footer-content">
                        <ul>
                            <li><h4>Social media</h4></li>
                            <li><FaFacebook /> </li>
                            <li><FaTwitter /></li>
                            <li><FaInstagram /></li>
                            <li><FaWhatsapp /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
