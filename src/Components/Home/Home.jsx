import React from 'react'
import "./Home.css"
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import Process from '../Process/Process';
import Services from '../Servicess/Services';
import Testimonials from '../Testimonials/Testimonials';
import Fleet from '../Fleet/Fleet';
import CTA from '../CTA/CTA.jsx';
 
function Home() {
  return (
    <>
    <div id='home'>
      <div className="left">
        <div className='button1'>
          <button>Trusted by 40,000+ worldwide</button>
        </div>
        <div className="name">
          <span className='heading1'><h1>Move Anything,</h1></span>
          <span className='heading2'><h1>Anywhere.</h1></span>
          <span className='heading3'><h1>On Time.</h1></span>
        </div>
        <div className="p">
          <p>SwiftCargo delivers courier packages and heavy cargo across 180 countries. Real-time tracking, full insurance, and dedicated support — every shipment, every time.</p>
        </div>
        <div className='track'>
          <input type="text" placeholder="Enter Tracking Number..." />
          <button>
            <h2>Track Now <FaLongArrowAltRight /></h2>
          </button>
        </div>
        <div className="extra">
          <h6><FaRegCheckCircle />No account needed</h6>
          <h6><FaRegCheckCircle />Live GPS updates</h6>
          <h6><FaRegCheckCircle />Free first quote</h6>
        </div>
      </div>
 
      <div className="right">
        <div className="stats-grid">
          <div className="box">
            <span><h2>2.4M+</h2></span>
            <span><p>Packages Delivered</p></span>
          </div>
          <div className="box">
            <span><h2>180+</h2></span>
            <span><p>Countries Served</p></span>
          </div>
          <div className="box">
            <span><h2>99.7%</h2></span>
            <span><p>On-Time Rate</p></span>
          </div>
          <div className="box">
            <span><h2>10 Years</h2></span>
            <span><p>In Business</p></span>
          </div>
        </div>
      </div>
    </div>
    <Services/>
    <Process/>
    
    <Fleet/>
    <Testimonials/>
    <CTA/>

    </>
  )
}
 
export default Home