import React from 'react'
import { FaHome, FaTimes, FaCreditCard, FaUserCircle, FaBell, FaTicketAlt, FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function MobileNav({ toggleMenu }) {

    return (
        <div className="mobile-nav-wraper">
                <ul className="nav">
                    <li><span className="nav-link" to="/" onClick={ toggleMenu } >{ openM <FaBars className="nav-link-icon-mobile" /></span></li>
                    <li><NavLink className="nav-link" to="/"><FaHome className="nav-link-icon-mobile" /></NavLink></li>
                </ul>
                <ul className="nav">
                    <li><NavLink className="nav-link" to="/basketball"><FaTicketAlt className="nav-link-icon-mobile" /> </NavLink></li>
                    <li><NavLink className="nav-link" to="/basketball"><FaCreditCard className="nav-link-icon-mobile" /> </NavLink></li>
                    <li><NavLink className="nav-link" to="/basketball"><FaBell className="nav-link-icon-mobile" /> </NavLink></li>
                    <li><NavLink className="nav-link" to="/sport"><FaUserCircle className="nav-link-icon-mobile" /> </NavLink></li>
                </ul>
        </div>
    )
}
