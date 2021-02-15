import React from 'react'


export default function Subheader() {
    const bckImg = process.env.PUBLIC_URL+"/images/football.jpg"
    return (
        <>
        <header className="subheader-container" style={{backgroundImage:`URL(${bckImg})`, backgroundSize:"100% 100%"}}>
            Subheader
        </header>
        </>
    )
}
