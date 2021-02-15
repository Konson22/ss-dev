import React, { useState, useEffect } from 'react'

export default function Results() {
    const [results, setResults] = useState({
        status:false,
        data:null
    })

    useEffect(()=> {
        fetch('http://localhost:5000/results').then(res => res.json()).then(data => setResults({
            status:true,
            data:data
        }))
    }, [])

    let content;
    if(results.status){
        content = results.data.rounds[0].matches.map(team => (
            <tr>
                        <td>{team.date}</td>
                        <td className="">{team.team1.name}</td>
                        <td className="">{team.score1}</td>
                        <td className="">{team.score2}</td>
                        <td className="">{team.team2.name}</td>
                    </tr>
        ))
        console.log(results.data.rounds[0].matches)
    }
    return (
        <div>
            <table className="my-table table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Home</th>
                        <th colSpan="2">Score</th>
                        <th>Away</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    )
}
