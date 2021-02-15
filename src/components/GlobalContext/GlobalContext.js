import React, { useState, useEffect, createContext } from 'react'
export const GlobalContext = createContext()


//https://app.sportdataapi.com/api/v1/soccer/leagues?apikey=ac050be0-6eaa-11eb-a319-97556cfced67
export const DataProvider = props => {
    const [matches, setMatches] = useState({
        status:false,
        data:null
    })
    // setting state for userCard
    const [userBet, setBet] = useState({
        status:false,
        data:null
    })

  
    // FETCHING MATCHES DATA
    useEffect(()=>{
        fetch('http://localhost:5000/matches').then(res => res.json()).then(data => setMatches({
            status:true,
            data:data
        }))
    }, [])

    // SETTING BET SLIP CARD
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
    //CLEARING BET SLIP
    const clearSlipCard = () => {
        localStorage.setItem('userCard', [])
            setBet({
            status:false,
            data:[]
        })
    }

   

    
    const handleAddBet = e => {
        setBet({
            status:true,
            data:[...userBet.data, e]
        })
        localStorage.setItem('userCard', JSON.stringify(userBet.data))
    }
    return (
        <GlobalContext.Provider value={{ matches, handleAddBet, userBet, clearSlipCard }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
