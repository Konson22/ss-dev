import React, { useState, useContext } from 'react'
import { GlobalContext } from '../GlobalContext/GlobalContext'
import { Card, Row, Col } from 'react-bootstrap'
import MatchesUi from '../MatchesUi'
import './Main.css'


export default function Main() {

    return (
        <div className="feauture-container">
            <div className="text-center title-container">
                <h3>FUETURES</h3>
            </div>
            <Row>
            <Col md={4}>
                <div>
                    <p>
                        Computer hardware is the physical components of a computer that we can
                        touch and feel. These are machinery or primary electronic devices that are used
                        to build up the computer or data processing system. Computer hardware
                     </p>
                </div>
            </Col>
            <Col md={4}>
                <div>
                    <p>
                        Computer hardware is the physical components of a computer that we can
                        touch and feel. These are machinery or primary electronic devices that are used
                        to build up the computer or data processing system. Computer hardware
                     </p>
                </div>
            </Col>
            <Col md={4}>
                <div>
                    <p>
                        Computer hardware is the physical components of a computer that we can
                        touch and feel. These are machinery or primary electronic devices that are used
                        to build up the computer or data processing system. Computer hardware
                     </p>
                </div>
            </Col>
        
            </Row>
        </div>
    )
}
