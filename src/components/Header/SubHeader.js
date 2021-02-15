import React from 'react'
import { FaHome, FaBars, FaUserCircle, FaBell, FaCreditCard, FaTicketAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function SubHeader() {
    const bckImg = process.env.PUBLIC_URL+"/images/header-bg.jpg"
    return (
        <>
        <header className="sub-header" style={{backgroundImage:`URL(${bckImg})`, backgroundSize:"100% 90%"}}>
        <div className="mobile-nav-wraper">
            <ul className="nav">
                <li><NavLink className="nav-link" to="/"><FaBars className="nav-link-icon-mobile" /></NavLink></li>
                <li><NavLink className="nav-link" to="/"><FaHome className="nav-link-icon-mobile" /></NavLink></li>
            </ul>
            <ul className="nav">
                <li><NavLink className="nav-link" to="/basketball"><FaTicketAlt className="nav-link-icon-mobile" /> </NavLink></li>
                <li><NavLink className="nav-link" to="/basketball"><FaCreditCard className="nav-link-icon-mobile" /> </NavLink></li>
                <li><NavLink className="nav-link" to="/basketball"><FaBell className="nav-link-icon-mobile" /> </NavLink></li>
                <li><NavLink className="nav-link" to="/sport"><FaUserCircle className="nav-link-icon-mobile" /> </NavLink></li>
            </ul>
        </div>
        </header>
        </>
    )
}
