import React from 'react'
import './Courses.css'

function Courses() {
    const background = `${process.env.PUBLIC_URL}/images/pexels-photo-1449082.jpeg`

    return (
        <header className="courses-header" style={{backgroundImage: `linear-gradient(to right, rgba(28, 26, 194, 0.545), rgba(0,0,0, .5)), url(${background})`, backgroundSize:'100% 100%'}}>
            Courses
        </header>
    )
}

export default Courses
