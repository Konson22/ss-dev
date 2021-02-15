import React, { useContext, useState, useEffect } from 'react'
import { Card, Table, Button } from 'react-bootstrap'
import { GlobalContext } from '../GlobalContext/GlobalContext'

import './Sidebar.css'

export default function RightSidebar() {
  const [userBet, setBet] = useState({
    status:false,
    data:null
})
  useEffect(()=>{
    if(localStorage.getItem('userCard')){
        if(localStorage.getItem('userCard') !== null){
            setBet({
                status:true,
                data:JSON.parse(localStorage.getItem('userCard'))
            })
        }
    }
}, [])
    // const { matches } = useContext(GlobalContext)

    // if(matches.status){
      // console.log(userBet)
    // }
    


    let content
    if(userBet.status){
        content = userBet.data.map(b => 
            <tr>
                <td>{b.home}</td>
                <td>{b.away}</td>
                <td>{b.odds[0]}</td>
            </tr>
          )
    }

    return (
        <aside className="right-bar">
            <div className="my-header">
                <div className="bet-slip">
                  <h4>Betslip <span className="badge badge-warning">2</span></h4>
                </div>
            </div>
            <div className="right-header">
                <div className="sub-right-header active">
                  <span>Single bet <span className="badge badge-warning">2</span></span>
                </div>
                <div className="sub-right-header">
                  <span>Multi bet <span className="badge badge-warning">0</span></span>
                </div>
            </div>
            <Card className="m-2 slip-card-body">
                <Table className="sidebar-table">
                  { content }
                </Table>
                <div>
                    <Button className="btn-m btn-success">Bet Now</Button>
                    <Button className="btn-m btn-primary mx-2">Book Now</Button>
                </div>
            </Card>
        </aside>
    )
}
