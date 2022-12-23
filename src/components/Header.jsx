import React, { useState } from 'react'
import "./header.css"

function Header({setCurCity}) {
  const [city, setCity] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setCurCity(city)
  }
  return (
    <div className='header'>
      <header className='semantic-header'>
          <form action="" className='form' onSubmit={onSubmit}>
            <input onChange={(e)=> setCity(e.target.value)} className='city-name' type="text" placeholder='City'/>
            <div>
              <button className='get-button'>Get Forecast</button>
            </div>
          </form>
      </header>
    </div>
  )
}

export default Header
