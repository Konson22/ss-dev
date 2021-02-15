import React, { useState, useContext } from 'react'
import { Card, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { GlobalContext } from './GlobalContext/GlobalContext'


export default function MatchesUi({ props }) {
    const { matches, handleAddBet } = useContext(GlobalContext)

    const [popUp, setPopUp] = useState(false)
    const [bet, setbet] = useState({
        status:false,
        data:null
    })

    const clsoePopupMudle = () => setPopUp(false)

    const openPopupMudle = e => {
        e.preventDefault()
        setPopUp(true)
        const selectedMatch =  matches.data.find(match => match.id == e.target.id)
        setbet({
            status:true,
            data:{
                home:selectedMatch.home,
                away:selectedMatch.away,
                odds:[selectedMatch.odds.HW, selectedMatch.odds.AW, selectedMatch.odds.DR]
            }
        })
    }

    const selectMatch = e => {
        handleAddBet(bet.data)
    }

    let content;
    if(bet.status){
        content = 
                <>
                    <h2>Primum Leque</h2>
                    <div className="bet-card-header">
                        <h5>{ bet.data.home} <br /> <span>{bet.data.odds[0] }</span> </h5>
                        <h4>VS</h4>
                        <h5>{ bet.data.away} <br /> <span>{bet.data.odds[1] }</span></h5>
                    </div>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <label>Type</label>
                                <select className="form-control">
                                    <option>Homw</option>
                                    <option>Away</option>
                                    <option>Draw</option>
                                </select>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <label>Odds</label>
                                <FormControl type="text"   />
                            </FormGroup>
                        </Col>
                    </Row>
                    <div className="text-center mt-3">
                        <Button variant="success mx-2" onClick={ selectMatch } >Add to card</Button>
                        <Button variant="danger" onClick={ clsoePopupMudle } >Cancel</Button>
                    </div>
                </>
    }else{
        <p>Loading...</p>
    }
     let count = 1

    
    return (
        <>
            <table className="my-table table table-striped">
                <thead>
                    <tr>
                        {/* <td>Date</td> */}
                        <th>Teams</th>
                        <th>Home</th>
                        <th>Draw</th>
                        <th>Away</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.map(match => (
                            <tr key={ match.id }>
                                {/* <td></td> */}
                                <td>{ match.home } <b>Vs</b> { match.away } <br/> <span className="date-text">{ match.data }</span></td>
                                <td>{ match.odds.HW }</td>
                                <td>{ match.odds.DR }</td>
                                <td>{ match.odds.AW }</td>
                                <td><span className="btn" id={ match.id } onClick={ openPopupMudle } >Bet </span></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className={ popUp ? "popup-module" : "hide-module" }>
                <div className="inner-module">
                    { content }
                </div>
            </div>
            </>
    )
}
