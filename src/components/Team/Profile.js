import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, FormControl } from 'react-bootstrap'


export default function Profile() {
    const [user, setUser] = useState({
        status:false,
        data:null,
        error:false
    })

    const {id} = useParams()
    useEffect(() => {
        
        fetch('/expert').then(res => res.json()).then(data => data.filter(user => user.id === id))
        .then( user => setUser({
            status:true,
            data:user,
            error:false
        }))
    }, [])

    let content
    if(user.data){
        content = user.data.map(profile => (
            <>
                <h3>{ profile.name }'s Profile</h3>

                <Row className="profile-wraper">
                    <Col md={4}>
                        <div className="profile-img">
                            <img src={process.env.PUBLIC_URL + profile.img } />                        
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="profile-text">
                            <ul>
                                <li className="nav-link">Name: { profile.name }</li>
                                <li className="nav-link">Gender: { profile.gender }</li>
                                <li className="nav-link">Current City: { profile.city }</li>
                                <li className="nav-link">Title: { profile.title }</li>
                                <li className="nav-link">Name: { profile.name }</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </>
        ))
    }

    return (
        <div className="container">
            <div className="main-container">
                { content }
            </div>
        </div>
    )
}
