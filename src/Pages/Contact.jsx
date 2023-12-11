import React from 'react'
import '../Pages/css/contact.css'

const Contact = () => {
  return (

    <div className="contact">
            <div className="contact-details">

            <div className="contact-us">
                    <h2>REACH US</h2>
                    <h4>COIMBATORE</h4>
                    <span>Second Floor, <br />
                     Nagammai Building, <br />
                     Dr Nanjappa Road, <br />
                     Park Gate, Ram Nagar, <br />
                     Coimbatore,Tamil Nadu 641018</span>
                </div>
                <div className="contact-us">
                    <h2>CALL US</h2>
                    <h4>Mobile Number</h4>
                    <span>9032140000 <br />
                    9032140000</span>
                </div>
                
                <div className="contact-us">
                    <h2>MAIL US</h2>
                    <h4>MAIL</h4>
                    <span>Write to this email for a detailed quotation</span>
                    <p>info@tripeasy.in</p>
                </div>
            </div>

            <div className="get-in-touch">
                <div className="travel-panning">

                
                <div className="trip-plan">
                    <h2>Get in Touch</h2>
                    <p>Write to us for personalized travel advice or for information on group travel</p>
                    <span>and last minute travel, all travel is insured and safe.</span>

                        <div className="contact-input">
                          
                            <input type="text" placeholder='Type Your Name'/>
                          
                           <input type="email"  placeholder='Enter Your E-mail'/>
                                      
                            <textarea placeholder='Your Messege' id="" cols="2" rows="2"></textarea>
                           
                           
                        </div>
                        </div>
                </div>
            </div>
  </div> 
  )
}

export default Contact