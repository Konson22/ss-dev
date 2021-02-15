import React from 'react'
import Navbar from './Navbar/Navbar'
import './Header.css'

export default function Header() {
    const bckImg = process.env.PUBLIC_URL+"/images/header-bg.jpg"
    return (
        <>
        <header className="header-container" style={{backgroundImage:`URL(${bckImg})`, backgroundSize:"100% 90%"}}>
        </header>
        <Navbar />
        </>
    )
}
