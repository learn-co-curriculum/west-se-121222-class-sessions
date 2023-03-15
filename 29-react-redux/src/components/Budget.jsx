import React from 'react'
import { useSelector } from 'react-redux'

export default function Budget() {

  const budget = useSelector(state => state.value)
  console.log("🚀 ~ file: Budget.jsx:7 ~ Budget ~ budget:", budget)

  return (
    <div>
        <h2>Redux Shelter Budget:</h2>
        <h3>${budget}</h3>
        <div>
            <button className="ui button" >Add $10</button>
            <button className="ui button" >Subtract $5</button>
        </div>
    </div>
  )
}
