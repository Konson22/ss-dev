import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    const background = `${process.env.PUBLIC_URL}/images/Pngtree.jpg`
    return (
        <header className="header" style={{backgroundImage: ` url(${background})`, backgroundSize:'100% 100%'}}>
            <div className="container">
                <div className="hero-wraper">
                    <h1>We turn I deas into reality</h1>
                    <Link className="btn hero-btn" to="/register"> Join our community</Link>
                    <button className="btn hero-btn desctop"> See what we do</button>
                </div>
            </div>
        </header>
    )
}

export default Header
