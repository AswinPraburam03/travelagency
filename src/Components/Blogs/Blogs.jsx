import React from 'react'
import '../Blogs/blogs.css'
import Tour from '../Assets/v1.mp4'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import hotel from '../Assets/hotel1.png'
import hotel1 from '../Assets/hotel2.png'
import hotel2 from '../Assets/hotel3.png'

import guide1 from '../Assets/guide.png'
import guide2 from '../Assets/guide2.png'
import guide3 from '../Assets/guide3.png'

const Blogs = () => {
  return (
    <div className='blogs'>
        <div className="blogs-wrapper">
            <h1>Watch Our Video Tour</h1>
            <p>Discover the best travelfeelings with us</p>
        <video className='videos' src={Tour} autoPlay muted loop type='video/mp4'></video>
        </div>

<div className="hotels">
    <h2>Best Hotel Deals</h2>
    <p>Best hotel deals to enjoy the tour, and feel comfortable</p>
    <div className="best-rating-hotels">  
    <div className="best-hotels">
        <img src={hotel} alt="" />
        <h2>The Grand</h2>
        <span><RoomOutlinedIcon /> Chennai</span>
        <p>Rs.10,000 per Night</p>
        <button className='btnn'>Book Now</button>
    </div>
    <div className="best-hotels">
        <img src={hotel1} alt="" />
        <h2>Taj Palace</h2>
        <span><RoomOutlinedIcon /> Chennai</span>
        <p>Rs.50,000 per Night</p>
        <button className='btnn'>Book Now</button>
    </div>
    <div className="best-hotels">
        <img src={hotel2} alt="" />
        <h2>Hyatt Regency</h2>
        <span><RoomOutlinedIcon /> Chennai</span>
        <p>Rs.25,000 per Night</p>
        <button className='btnn'>Book Now</button>
    </div>
    </div>
</div>


        <div className="tripy-guide">
            <h1>Tripy Tourist Guides</h1>
            <p>Enjoy your travel with our expert guide</p>

            <div className="card">
            <div className="guide-profile-card">
                <img src={guide1} alt="" />
                <h4>Davis Johnson</h4>
                <span>City Guide</span>
                <p>I will be your city guide</p>
                <button>Book Now</button>            
            </div>
      
            <div className="guide-profile-card">
                <img src={guide2} alt="" />
                <h4>Davis Johnson</h4>
                <span>Mountain Guide</span>
                <p>I will be your mountain guide</p>
                <button>Book Now</button>
            </div>
       
            <div className="guide-profile-card">
                <img src={guide3} alt="" />
                <h4>Davis Johnson</h4>
                <span>Sea Guide</span>
                <p>I will be your sea guide</p>
                <button>Book Now</button>
            </div>
        </div>
        </div>     
    </div>
  )
}

export default Blogs