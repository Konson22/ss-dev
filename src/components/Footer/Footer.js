import React from 'react'
import {Link} from 'react-router-dom'
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaWhatsapp, FaUser } from 'react-icons/fa'

import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="container">
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
