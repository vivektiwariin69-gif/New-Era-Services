import React from 'react'
import "./Track.css"

function Track() {
  return (
    <div id='track'>
      <p className='p1'>Track Your Shipment</p>
      <h1>Where is My Package?</h1>
      <p className='p2'>Enter your SwiftCargo tracking number for live, step-by-step updates.</p>
      <div className='search_Shipment'>
        <input type="search" placeholder='eg. SW-48291047' />
        <button>Track</button>
      </div>

    </div>
  )
}

export default Track
