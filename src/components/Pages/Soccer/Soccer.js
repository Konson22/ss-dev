import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../GlobalContext/GlobalContext'
import { Card, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import MatchesUi from '../../MatchesUi'
import { Link } from 'react-router-dom'

import './Soccer.css'

export default function Soccer() {
    const { matches, handleAddBet } = useContext(GlobalContext)

    return (
        <>
        <div>
            <div className="body-header">
                <span>League D</span>
            </div>
            { matches.status ? <MatchesUi props={ matches.data } /> : "Loading..." }
        </div>
        </>
    )
}

