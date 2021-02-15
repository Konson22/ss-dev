import React, { useState, useContext } from 'react'
import { FaHome, FaTimes, FaCreditCard, FaUserCircle, FaBell, FaTicketAlt, FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import Navlinks from './Navlinks'
// import MobileNav from '../Navbar/MobileNav'
import './Navbar.css'


export default function Navbar() {
    const [ openMenu, setOpenMenu ] = useState(false)
    function toggleMenu(){ 
        setOpenMenu(!openMenu) 
    }
    function hideMenu(){
        setOpenMenu(false) 
    }
    
    const transitions = useTransition(openMenu, null, {
        from:{opacity:0, transform:'translateX(-100%'},
        enter:{opacity:1, transform:'translateX(0)'},
        leave:{opacity:0, transform:'translateX(-100%'}
    })
    
    return (
        <nav className="navbar-wraper">
            <MobileNav toggleMenu={ toggleMenu } hideMenu={hideMenu} openMenu={openMenu} />
            <div className="big-navigation">
                <Navlinks />
            </div>
            {
                transitions.map(({item, key, props})=> 
                    item && <animated.div key={key} style={props} className="mobile-navigation-links">
                        <Navlinks hideMenu={ hideMenu } />
                </animated.div>)
            } 
        </nav>
    )
}


const MobileNav = ({ toggleMenu, openMenu, hideMenu }) => {

    return (
        <div className="mobile-nav-wraper">
                <ul className="nav">
                    <li><span className="nav-link" to="/" onClick={ toggleMenu } >{ openMenu ? <FaTimes className="nav-link-icon-mobile" /> : <FaBars className="nav-link-icon-mobile" /> } </span></li>
                    <li><NavLink className="nav-link" to="/" onClick={hideMenu}><FaHome className="nav-link-icon-mobile" /></NavLink></li>
                </ul>
                <ul className="nav" onClick={hideMenu}>
                    <li><NavLink className="btn btn-success btn-sm nav-link" to="/basketball"> Join </NavLink></li>
                    <li><NavLink className="btn btn-warning ml-2 btn-sm nav-link" to="/basketball"> Login </NavLink></li>
                    {/* <li><NavLink className="nav-link" to="/basketball"><FaCreditCard className="nav-link-icon-mobile" /> </NavLink></li>
                    <li><NavLink className="nav-link" to="/basketball"><FaBell className="nav-link-icon-mobile" /> </NavLink></li>
                    <li><NavLink className="nav-link" to="/sport"><FaUserCircle className="nav-link-icon-mobile" /> </NavLink></li> */}
                </ul>
        </div>
    )
}
