import React from 'react'
import '../Packages/packages.css'
import Travel1 from '../Assets/t11.png'
import Travel2 from '../Assets/t10.png'
import Travel3 from '../Assets/t9.png'
import Visa from '../Assets/visa.png'
import Taxi from '../Assets/taxi.png'
import Ticket from '../Assets/ticket.png'
import Pass from '../Assets/pass.png'

const Packages = (props) => {
  return (
    <div className='Rightbar'>
        
    <div className="rightbar-wrapper">
   
        <label>Search:</label> <br />

        <input className='searchbar' type="search" placeholder='Search Your Destination'/>

        <div className="destination-select">
            <label>Destination:</label>
            <select id='country'>
            <option value="Astralia">Astralia</option>
            <option value="India">India</option>
            <option value="Lodon">London</option>
            <option value="America">America</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
            <option value="Hong Kong">Hong Kong</option>
            </select>
        </div>

        <div className="Category">
            <label>Category :</label>
            <select id="Category">
                <option value="Domestic">Domestic</option>
                <option value="Internation">International</option>
            </select>
        </div>

        <div className="Sub-Category">
            <label>Sub Category :</label>
            <select name="Sub Category" id="Sub Category">
                <option value="Eduction">Eduction</option>
                <option value="General">General</option>
                <option value="Trending">Trending</option>
                <option value="Affordable">Afforadable</option>
            </select>
        </div>

        <div className="Durations">
            <label>Durations :</label>
            <select id="Durations">
                <option value="5days">Upto 5 days</option>
                <option value="8days">Upto 8 days</option>
                <option value="10days">Upto 10 days</option>
                <option value="14days">Upto 14 days</option>
                <option value="16days">Upto 16 days</option>
                <option value="20days">Upto 20 days</option>
            </select>
        </div>

        <div className="range">
            <label>Price-Range:</label>
            <input type="range" />
        </div>
    </div>

    <div className="package">
        <div className="package-card">
        <div className="package-wrapper">
            <div className="tavel-img">
                <img src={Travel1} alt=""  width="300" height="200"/>
                </div>
                <div className="package-details">
                    <h2>Thailand tour packages from India</h2>
                    <p>Indonesia</p>
                    <div className="iconss">
                        <h4>Inclusion</h4>
                        <img src={Visa} alt="" width="30" height="30"/>
                        <img src={Pass} alt="" width="30" height="30"/>
                        <img src={Taxi} alt="" width="30" height="30"/>
                        <img src={Ticket} alt="" width="30" height="30"/>
                    </div>

                    <div className="package-details">
                        <button>Details</button>
                    </div>
                
            </div>
        </div>

        <div className="package-wrapper">
            <div className="tavel-img">
                <img src={Travel2} alt=""  width="300" height="200"/>
                </div>
                <div className="package-details">
                    <h2>Mladives tour packages from India</h2>
                    <p>Indonesia</p>
                    <div className="iconss">
                        <h4>Inclusion</h4>
                        <img src={Visa} alt="" width="30" height="30"/>
                        <img src={Pass} alt="" width="30" height="30"/>
                        <img src={Taxi} alt="" width="30" height="30"/>
                        <img src={Ticket} alt="" width="30" height="30"/>
                    </div>

                    <div className="package-details">
                        <button>Details</button>
                    </div>
                
            </div>
        </div>
        <div className="package-wrapper">
            <div className="tavel-img">
                <img src={Travel3} alt=""  width="300" height="200"/>
                </div>
                <div className="package-details">
                    <h2>Dubai tour packages from India</h2>
                    <p>Indonesia</p>
                    <div className="iconss">
                        <h4>Inclusion</h4>
                        <img src={Visa} alt="" width="30" height="30"/>
                        <img src={Pass} alt="" width="30" height="30"/>
                        <img src={Taxi} alt="" width="30" height="30"/>
                        <img src={Ticket} alt="" width="30" height="30"/>
                    </div>

                    <div className="package-details">
                        <button>Details</button>
                    </div>
                
            </div>
        </div>
          </div>
          </div>
          </div>
  
  )
}

export default Packages