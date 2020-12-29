import React from 'react'
import './Header.css'

function Header() {
    const background = `${process.env.PUBLIC_URL}/images/pexels-brett-sayles-2881229.jpg`
    return (
        <header className="header" style={{backgroundImage: `linear-gradient(to right, rgba(28, 26, 194, 0.545), rgba(0,0,0, .5)), url(${background})`, backgroundSize:'100% 100%'}}>
            <div className="hero-wraper">
                <h1>Join S.S Developers Community where I deas become reality</h1>
            </div>
        </header>
    )
}

export default Header
