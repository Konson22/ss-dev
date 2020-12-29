import React from 'react'
import { Link } from 'react-router-dom'

import { Row, Col, Card, Button} from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaUser } from 'react-icons/fa'

export default function DisplayTeam({ experts }) {
    let container;
    if(experts.data){
        container = experts.data.map(expert => (
                <div className="expert-slide-wraper" key={expert.id}>
                    <div className="expert-img">
                        <img src={process.env.PUBLIC_URL + expert.img } />
                    </div>
                    <div className="expert-text">
                        <h4>{ expert.name }</h4>
                        <h5>{ expert.title }</h5>
                        
                    </div>
                    <div className="expert-media-wraper">
                        <span className="btn btn-sm"><FaGithub /></span>
                        <span className="btn btn-sm"><FaFacebook /></span>
                        <span className="btn btn-sm"><FaInstagram /></span>
                        <span className="btn btn-sm"><FaTwitter /></span>
                    </div>
                    <Link className="btn btn-info btn-sm m-2" to={`/profile/${expert.id}`}><FaUser /> view Profile</Link>
                </div>
        ))
    }
    return (
        <div>
            <div className="title-wraper text-center">
                <h1>Meet expert team</h1>
            </div>
            <div className="expert-main-wraper">
                <div className="expert-wraper">
                    { container }
                </div>
            </div>
        </div>
    )
}
