import React from 'react'

export default function Budget() {

  return (
    <div>
        <h2>Redux Shelter Budget:</h2>
        <h3>${""}</h3>
        <div>
            <button className="ui button" >Add $10</button>
            <button className="ui button" >Subtract $5</button>
        </div>
    </div>
  )
}
