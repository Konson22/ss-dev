import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { FaBars, FaTimes, FaUserAlt } from 'react-icons/fa'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navlinks from './Navlinks'
import './Navbar.css'

function Navbar() {
    const [showmenu, setShowmenu] = useState(false)
    const transitions = useTransition(showmenu, null, {
        from:{opacity:0, transform:'translateX(100%)'},
        enter:{opacity:1, transform:'translateX(0)'},
        leave:{opacity:0, transform:'translateX(100%)'}
    })

    const toggleMenu = () => setShowmenu(!showmenu)
    const hideMenu = () => setShowmenu(false)
    return (
        <nav>
            <div className="container navbar-wraper">
                <div className="logo-wraper">
                    <ul className="nav">
                        <li className="nav-item"><Link className="nav-link" to="/"><h3>SS-Dev</h3></Link></li>
                    </ul>
                </div>
                <div className="navbar-links-wraper desctop">
                    <Navlinks />
                </div>
                {
                    transitions.map(({item, key, props})=> 
                        item && <animated.div key={key} style={props} className="navbar-links-wraper mobile">
                        <Navlinks hideMenu={ hideMenu }/>
                    </animated.div>
                    )
                }

                <div className="menu-wraper">
                    <Link className="btn nav-btn mr-3" to="/register"> Join community</Link>
                    <Link className="btn nav-btn" to="/signup">Sign up</Link>
                </div>
                <div className="mobile-menu">
                    <ul className="nav">
                        <li className="nav-item" onClick={ hideMenu }><Link className="nav-link" to="/login"><FaUserAlt className="nav-icon" /></Link></li>
                        <li className="nav-item" onClick={ toggleMenu }><span className="nav-link">{ showmenu ? <FaTimes className="nav-icon" /> : <FaBars className="nav-icon"/>}</span></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
