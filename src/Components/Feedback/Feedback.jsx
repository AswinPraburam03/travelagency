import React from 'react'
import '../Feedback/feedback.css'
import pro1 from '../Assets/cus1.png'
import pro2 from '../Assets/cus2.png'
import pro3 from '../Assets/cus3.png'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';


const Feedback = () => {
  return (
    <div className='Feedback'>
        <div className="customer-feedback">
            <h2>Trip<span>Easy!</span> Customer Feedback</h2>
            <p>See what your customer told about us</p>
</div>

<div className="card">


            <div className="custumer-profile">
                <div className="card-center">
                    <div className="pro-img">
                        <img src={pro1} alt="" />
                        <div className="cus-name">
                        <h1>Jason</h1>
                        <p>chennai,Tamilnadu</p>
                        </div>
                        <div className="star-rating">
                         <span>4.0  <StarOutlinedIcon className='icon'/></span>      
                        </div>
                        </div>
                        </div>

                        <div className="hide">
                            <p>"Wow...I enjoyed my travel a lot the services are too good, and also very cheap compare to other booking site.</p>
                            <h5><strong>Trip <span>Easy!</span></strong> always the best"</h5>                    
                </div>
            </div>

            <div className="custumer-profile">
                <div className="card-center">
                    <div className="pro-img">
                        <img src={pro2} alt="" />
                        <div className="cus-name">
                        <h1>Johnson</h1>
                        <p>chennai,Tamilnadu</p>
                        </div>
                        <div className="star-rating">
                         <span>4.0  <StarOutlinedIcon className='icon'/></span>      
                        </div>
                        </div>
                        </div>

                        <div className="hide">
                            <p>"Wow...I enjoyed my travel a lot the services are too good, and also very cheap compare to other booking site.</p>
                            <h5><strong>Trip <span>Easy!</span></strong> always the best"</h5>                
                </div>
            </div>


            <div className="custumer-profile">
                <div className="card-center">
                    <div className="pro-img">
                        <img src={pro3} alt="" />
                        <div className="cus-name">
                        <h1>Emily</h1>
                        <p>chennai,Tamilnadu</p>
                        </div>
                        <div className="star-rating">
                         <span>4.0  <StarOutlinedIcon className='icon'/></span>      
                        </div>
                        </div>
                        </div>

                        <div className="hide">
                            <p>"Wow...I enjoyed my travel a lot the services are too good, and also very cheap compare to other booking site.</p>
                            <h5><strong>Trip <span>Easy!</span></strong> always the best"</h5>           
                </div>
            </div>
            </div>
        </div>

  )
}

export default Feedback