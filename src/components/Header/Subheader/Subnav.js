import React from 'react'
import { FaHome, FaRegNewspaper, FaListAlt, FaPlayCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Subnav() {
    return (
        <div className="sub-nav-container">
            <ul className="nav" >
                <li><NavLink activeClassName="active-class" className="nav-link" to="/tennis"><FaPlayCircle className="nav-link-icon" /> LIVE</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/table"><FaListAlt className="nav-link-icon" /> TABLE</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/sport"><FaHome className="nav-link-icon" /> fIXTURE</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/result"><FaHome className="nav-link-icon" /> RESULTS</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/inplay"><FaRegNewspaper className="nav-link-icon" /> NEWS</NavLink></li>
                {/* <li><NavLink activeClassName="active-class" className="nav-link" to="/live"><FaBaseballBall className="nav-link-icon" /> LIVE</NavLink></li> */}
            </ul>
        </div>
    )
}
