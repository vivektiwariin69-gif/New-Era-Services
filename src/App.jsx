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
import { Route, Routes } from 'react-router-dom'
import TrackOrder from './TrackOrder/TrackOrder'
import Contact from './Contacts/Contact'

function App() {
  return (
    <>
    <Nav/>

    <Routes>
      
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/TrackOrder" element = {<TrackOrder/>}/>
      <Route path = "/Contact" element = {<Contact/>}/>
     

    </Routes>

     <Footer/>

    </>
   
  )
}

export default App

