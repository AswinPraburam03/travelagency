import React from 'react'
import './css/destinationCate.css'
import Item from '../Components/ItemList/Item'
import all_destination from '../Components/Assets/all_destination'
import Travelogues from '../Components/Assets/tr1.png'
import Travelogues2 from '../Components/Assets/tr2.png'
import Travelogues3 from '../Components/Assets/tr3.png'

const DestinationCate = (props) => {

  return (
    <div className='shop-category'>
    <img className='shopcate-banner' src={props.Banner} alt="" />

    <div className="overlay">
    <input type="search" placeholder='Search Your Travel Destination'/>
    <button>Search</button>
    </div>
    
    <div className="shop-cate-indexsort">

      <h1>
      Popular Destinations
      </h1>

      <div className="shopcate-sort">
          {/* Sort by<img src={dropdown} alt="" /> */}
      </div>
    </div>

    <div className="shopcate-products">
      {all_destination.map((item, i) => {
        if(props.category===item.category) {
         return <Item key={i} id={item.id} name={item.name} image={item.image}/>
        }
        else{
          return null;
        }
      })}
    </div>

   

    <div className="shopCate-loadmore">
      Get More
    </div>
    <div className="Travelogues">
       <h1>Travelogues</h1>
       
       <div className="Travelogues-holidays">

       
    <div className="Travelogues-img">
    <img src={Travelogues} alt="" />
    <p>United States public holidays in the Year of <br />
     the Rabbit 2023</p>
  </div>
    <div className="Travelogues-img">
    <img src={Travelogues2} alt="" />
    <p>12 Best Places to Visit in May in the USA</p>
  </div>
    <div className="Travelogues-img">
    <img src={Travelogues3} alt="" width="420" height="260"/>
    <p>9 Iconic Chicago Buildings and How to Explore Them</p>
  </div>
  </div>
</div>

     

  </div>
  )
}

export default DestinationCate