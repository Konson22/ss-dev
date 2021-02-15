import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function LeftSidebar() {
    
    const [leagues, setleagues] = useState({
        status:false,
        data:null
    })

    useEffect(()=> {
        fetch('http://localhost:5000/leagues').then(res => res.json()).then(data => setleagues({
            status:true,
            data:data
        }))
    }, [])

    let content;
    if(leagues.status){
        content = leagues.data.map(leasgue => (
            <li key={leasgue.league_id}><NavLink className="nav-link" to="/">{leasgue.name}</NavLink></li>
        ))
        console.log(leagues.data)
    }
    return (
        <aside className="left-bar">
            <div className="my-header">
                <b className="text-warning">High light</b>
            </div>
            <ul className="nav">
            { content }
            </ul>
                
        </aside>
    )
}
