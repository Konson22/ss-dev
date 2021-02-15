import React from 'react'
import { FaHome, FaBaseballBall, FaFootballBall, FaTableTennis, FaHorseHead, FaPlay, FaUserCircle, FaBell } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Navlinks({ hideMenu }) {
    return (
        <nav className="navbar-container">
            <ul className="nav primary-nav" onClick={hideMenu}> 
                <li><NavLink activeClassName="active-class" className="nav-link" to="/gg"><FaHome className="nav-link-icon" /> HOME</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/sport"><FaFootballBall className="nav-link-icon" /> SOCCER</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/basketball"><FaBaseballBall className="nav-link-icon" /> BASKETBALL</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/inplay"><FaPlay className="nav-link-icon" /> INPLAY</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/tennis"><FaTableTennis className="nav-link-icon" /> TENNIS</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/live"><FaBaseballBall className="nav-link-icon" /> LIVE</NavLink></li>
            </ul>
            <div className="big-nav-user-icons">
                <ul className="nav">
                    <li><NavLink activeClassName="bg-warning" exact={true} className="nav-link" to="/tennis"><FaUserCircle className="user-nav-link-icon" /> </NavLink></li>
                    <li><NavLink activeClassName="bg-warning" exact={true} className="nav-link" to="/hourse-race"><FaBell className="user-nav-link-icon" /> </NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
