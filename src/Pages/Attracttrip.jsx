import React from 'react'
import './css/trip.css';
import Attract1 from '../Components/Assets/A1.png'
import Attract2 from '../Components/Assets/A2.png'
import Attract3 from '../Components/Assets/A3.png'
import Attract4 from '../Components/Assets/A4.png'
import Attract5 from '../Components/Assets/A5.png'

const Attracttrip = (props) => {
  return (
    <div className='Trip-category'>
    <img className='shopcate-banner' src={props.Banner} alt="" />
<div className="overlay-heading">
<div className="overlay">
    <h2>Travelers' Choice</h2>
    <p>Best of the Best Things to Do</p>
    </div>
    
</div>

    <h1>Top Attractions-World</h1>
    
    <div className="shop-cate-indexsort">

      
      <p>We award Travelers’ Choice Best of the Best to experiences and attractions with a high volume of above-and-beyond reviews and opinions from our community over a 12-month period. Each winner has passed our rigorous trust and safety standards. Fewer than 1% of Tripadvisor’s 8 million listings are awarded Best of the Best, signifying the highest level of excellence in travel.</p>

    </div>
     <hr className='hrs'/>

    <div className="Attract-World">

<div className="Tripcate-Attract">

  <div className="Attract-tripp">
    <img src={Attract1} alt="" />

    <div className="Img-details">
      <h2>Colosseum</h2>
      <span>The ancient Flavian Amphitheater was built by the Flavian emperors in 70 C.E. <br />
       as a gift to the Roman people. As the largest Roman theater ever built, <br />
        it was designed to house over 50,000 people, and had played host to gladiator games, <br />
         plays and even public executions. </span>
         <button>Read More</button>
    </div>
    </div>     
<div className="Tripcate-Attract">

  <div className="Attract-trip">
    <img src={Attract2} alt="" />

    <div className="Img-details">
      <h2>The Dubai Fountain</h2>
      <span>Choreographed to music, the Dubai Fountain shoots water as high as 500 feet –that’s as high as a 50-story building. Designed by creators of the Fountains of Bellagio in Vegas, Dubai Fountain Performances occur daily on the 30-acre Burj Khalifa Lake.</span>
         <button>Read More</button>
    </div>
    </div>     
    </div>

   

   
<div className="Tripcate-Attract">

  <div className="Attract-trip">
    <img src={Attract3} alt="" />

    <div className="Img-details">
      <h2>Empire State Building</h2>
      <span>The Empire State Building is the World's Most Famous Building. It rises 1,454 ft from ground to antenna & features the only 360 degree open-air vantage point of Midtown. The 86th & 102nd Fl Observatories are open daily, see</span>
         <button>Read More</button>
    </div>
    </div>     
    </div>


<div className="Tripcate-Attract">

  <div className="Attract-trip">
    <img src={Attract4} alt="" />

    <div className="Img-details">
      <h2>Central Park</h2>
      <span>For more than 150 years, visitors have flocked to Central Park's 843 green acres in the heart of Manhattan. Since 1980, the Park has been managed by the Central Park Conservancy, in partnership with the public. Central Park is open 6 am to 1 am daily. </span>
         <button>Read More</button>
    </div>
    </div>     
    </div>

<div className="Tripcate-Attract">

  <div className="Attract-trip">
    <img src={Attract5} alt="" />

    <div className="Img-details">
      <h2>Iguazu Falls</h2>
      <span>The colossal power of these thundering falls, viewable from both Argentina and Brazil, and accessible from Paraguay, is a mesmerizing sight: 275 separate falls in a U-shaped formation pound the water below in raging cascades with a deafening intensity. </span>
         <button>Read More</button>
    </div>
    </div>     
    </div>
    </div>
 
    </div>

</div>
  )
}

export default Attracttrip