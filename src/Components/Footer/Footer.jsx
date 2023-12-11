import React from 'react'
import '../Footer/footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-wrapper">
            <h2>Subscribe To Stay Updated</h2>
            <input type="email" placeholder='Enter Your E-mail'/>
            <button>Subscribe</button>

            <p>Travel beyond your imagination, with our Travel Agency!</p>
        </div>

        <div className="footerCard flex">
          <div className="footerInfo flex">
            <div className="logoDiv">
              <a href="#" className='logoo flex'>
           Trip<span>Easy!</span></a>
            </div>

           
          </div>
        

        <div className="footerLinks grid">
          <div className="linkGroup">
            <span className="groupTitle">
              Our Holidays
            </span>

            <li className="footerList flex">Servics
            </li>

            <li className="footerList flex">Insurance
            </li>

            <li className="footerList flex">Agency
            </li>

            <li className="footerList flex">Tourism
            </li>

            <li className="footerList flex">Payment
            </li>
          </div>
          <div className="linkGroup">
            <span className="groupTitle">
              Partners
            </span>

            <li className="footerList flex">Bookings
            </li>

            <li className="footerList flex">Rent Cars
            </li>

            <li className="footerList flex">MakemyTrip
            </li>

            <li className="footerList flex">Trivago
            </li>

            <li className="footerList flex">TripAdvisor
            </li>
          </div>
          <div className="linkGroup">
            <span className="groupTitle">
              Last Minute
            </span>

            <li className="footerList flex">Thailand
            </li>

            <li className="footerList flex">Dubai
            </li>

            <li className="footerList flex">Bali
            </li>

            <li className="footerList flex">Maldives
            </li>

            <li className="footerList flex">Singapore
            </li>
          </div>

          <div className="footerSocials flex">
            <FacebookOutlinedIcon className="iconss"/>
            <SubscriptionsOutlinedIcon className="iconss"/>
          
            </div>
          </div>
          <div className="footerDiv">
        <p>&copy;CopyRights All Reserved By Explore</p>
      </div>
        </div>
        </div>
    
  )
}

export default Footer