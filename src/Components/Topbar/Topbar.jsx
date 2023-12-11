import React, { useState }  from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'


const Topbar = () => {

  const[menu, setMenu] = useState('home')

  return (
   
    <div className='topbar'>
        <div className="top-logo">
            <p>Trip<span>Easy!</span></p>
        </div>

       <ul className="top-menu">
        <li onClick={()=>{setMenu('home')}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu('Destination')}}><Link style={{textDecoration:'none'}} to='/Destination'>Destinations</Link>{menu==="Destination" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu('Attract')}}><Link style={{textDecoration:'none'}} to='/Attract'>Attractions & Tours</Link>{menu==="Attract" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu('package')}}><Link style={{textDecoration:'none'}} to='/package'>Packages</Link>{menu==="package" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu('contact')}}><Link style={{textDecoration:'none'}} to='/contact'>Contact</Link>{menu==="contact" ? <hr/> : <></>}</li>
       </ul>

       <div className="top-login">
      <Link to='/login'><button className="btn">Login</button></Link>
       </div>
    </div>
  )
  
}

export default Topbar