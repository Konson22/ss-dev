import React, { useEffect, useState } from 'react'

export default function Tables() {
    const [standings, setStandings] = useState({
        status:false,
        data:null
    })

    useEffect(()=> {
        fetch('http://localhost:5000/standings').then(res => res.json()).then(data => setStandings({
            status:true,
            data:data
        }))
    }, [])

    let content;
    if(standings.status){
        content = standings.data.data.standings.map(team => (
            <tr>
                        <td>{team.team_id}</td>
                        <td>{team.position}</td>
                        <td>{team.points}</td>
                        <td>{team.status}</td>
                        <td>{team.result}</td>
                    </tr>
        ))
        console.log(standings.data.data.standings)
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Points</th>
                        <th>Status</th>
                        <th>Results</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    )
}
