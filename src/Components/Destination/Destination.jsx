import React from 'react'
import '../Destination/destination.css'
import data_destination from '../Assets/data'
import Item from '../ItemList/Item'
import Desti from '../Assets/t1.png'
import London from '../Assets/t5.png'
import Taj from '../Assets/t6.png'
import Tahiti from '../Assets/t7.png'
import BARCELONA from '../Assets/t8.png'
import Dubai from '../Assets/t9.png'
import Mal from  '../Assets/t10.png'
import Thai from '../Assets/t11.png'

const Destination = () => {
  return (
    <div className='bestFoods'>
    <h1>Popular Place To Visit</h1>
    <p>Most Trending and Popular around the wrold</p>
    <hr />
    
    <div className="popular-item">
        {data_destination.map((item, i) =>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} offer={item.offer} price={item.price}/>
        })}
    </div>

    <div className="topDestinations">
        <h2>Top Destinations</h2>
        <p>Most Trending and Popular around the wrold</p>
        <hr />
    </div>

<div className="flip">


    <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={Desti} alt="" />
      </div>
      <div className="flip-card-back">
        <div className="card-content">
            <h2>Bali</h2>
            <p>Most Trending and Popular around the wrold</p>
            <a href="/" className='btn'>Book Now</a>
        </div>
      </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={London} alt="" />
      </div>
      <div className="flip-card-back">
        <div className="card-content">
            <h2>London</h2>
            <p>Most Trending and Popular around the wrold</p>
            <a href="/" className='btn'>Book Now</a>
        </div>
      </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={Taj} alt="" />
      </div>
      <div className="flip-card-back">
        <div className="card-content">
            <h2>Taj Mahal</h2>
            <p>Most Trending and Popular around the wrold</p>
            <a href="/" className='btn'>Book Now</a>
        </div>
      </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={Tahiti} alt="" />
      </div>
      <div className="flip-card-back">
        <div className="card-content">
            <h2>Tahiti</h2>
            <p>Most Trending and Popular around the wrold</p>
            <a href="/" className='btn'>Book Now</a>
        </div>
      </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={BARCELONA} alt="" />
      </div>
      <div className="flip-card-back">
        <div className="card-content">
            <h2>Barcelona</h2>
            <p>Most Trending and Popular around the wrold</p>
            <a href="/" className='btn'>Book Now</a>
        </div>
      </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={Dubai} alt="" />
      </div>
      <div className="flip-card-back">
        <div className="card-content">
            <h2>Dubai</h2>
            <p>Most Trending and Popular around the wrold</p>
            <a href="/" className='btn'>Book Now</a>
        </div>
      </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={Mal} alt="" />
      </div>
      <div className="flip-card-back">
        <div className="card-content">
            <h2>Maldives</h2>
            <p>Most Trending and Popular around the wrold</p>
            <a href="/" className='btn'>Book Now</a>
        </div>
      </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={Thai} alt="" />
      </div>
      <div className="flip-card-back">
        <div className="card-content">
            <h2>Thailand</h2>
            <p>Most Trending and Popular around the wrold</p>
            <a href="/" className='btn'>Book Now</a>
        </div>
      </div>
      </div>
    </div>
</div>

<button>View More</button>
</div>
  )
}

export default Destination