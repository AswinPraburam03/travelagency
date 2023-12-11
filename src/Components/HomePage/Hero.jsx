import React from 'react'
import '../HomePage/hero.css'
import Bino from '../Assets/bino.png'
import Ticket from '../Assets/ticket.png'
import Travel from '../Assets/travel.png'


const Hero = () => {
  return (
    

    
    <div className='hero'>
    <div className="hero-left">
        <h2>Explore The Beauty Of Travel</h2>
    

    <div>
        <div className="hero-hand-icon">
            <p>With Trip<span>Easy!</span></p>
            
            </div>

      
        <ul className="tickets">
            <li className='hotels'>Hotels</li>
            <li>Flights</li>
            <li>Cars</li>
        </ul>
      </div>

     <div className="booking">
        <div className="plan">
        <p>Where do you want to go</p>
        <input type="text" placeholder='country, city'/>
        </div>
       

    <div className="checkin">
    <p>Check In</p>
        <input type="date"/>
    </div>
       
       <div className="checkout">
        <p>Check Out</p>
        <input type="date"/>
       </div>

       <div className="guests">
        <p>Guests</p>
        <input type="number" min='0'/>
       </div>

     </div>
    

    <div className="hero-latest-btn">
        <div>Check Availablity</div>
    </div>

<div className="Locations">

<div className="recommend">
    <img src={Bino} alt="" width="20px" height="20px"/>
    <h3>Search Your Destination</h3>
    <p>Navigate to a specific address.</p>
     <p className='para'>business or contact with one of the options below.</p>
      <span>Tap the Search bar and type to find your destination.</span>

    </div>
<div className="recommend">
    <img src={Ticket} alt="" width="20px" height="20px"/>
    <h3>Get Your Tickets</h3>
    <p>Navigate to a specific address.</p>
     <p className='para'>business or contact with one of the options below.</p>
      <span>Tap the Search bar and type to find your destination.</span>

    </div>
<div className="recommend">
    <img src={Travel} alt="" width="20px" height="20px"/>
    <h3>Travel Around The World</h3>
    <p>Navigate to a specific address.</p>
     <p className='para'>business or contact with one of the options below. </p>
     <span>Tap the Search bar and type to find your destination.</span>

    </div>

</div>
 
    </div> 
</div>

  )
}

export default Hero