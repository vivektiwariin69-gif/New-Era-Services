import React from 'react'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Services from './Components/Servicess/Services'
import Process from './Components/Process/Process'
import Fleet from './Components/Fleet/Fleet'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import Track from './Components/Track/Track'
import TrackShipment from './Components/Trackshipment/Trackshipment'

function App() {
  return (
    <div>
      <Nav/>
      <Track/>
      <TrackShipment/>
      {/* <Home/>
      <Services/>
      <Process/>
      <Fleet/>
      <Testimonials/> */}
      <Footer/>
    </div>
  )
}

export default App

