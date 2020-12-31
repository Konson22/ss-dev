import React from 'react'
import { Link } from 'react-router-dom'


export default function Navlinks({ hideMenu }) {
    return (
        <ul className="nav">
            <li className="nav-item" onClick={ hideMenu }><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item" onClick={ hideMenu }><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item" onClick={ hideMenu }><Link className="nav-link" to="/courses">Courses</Link></li>
            <li className="nav-item" onClick={ hideMenu }><Link className="nav-link" to="/projects">Projects</Link></li>
            <li className="nav-item" onClick={ hideMenu }><Link className="nav-link" to="/team">Team</Link></li>
        </ul>
    )
}
