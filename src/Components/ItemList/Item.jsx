import React from 'react'
import '../ItemList/item.css'
import {Link} from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>

        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" width="350" height="350"/></Link>
        <p>{props.name}</p>

        {/* <div className="items-priceList">

            <div className="item-newPrice">
                Rs.{props.offer}
            </div>

            <div className="item-oldPrice">
                Rs.{props.price}
            </div>
        </div> */}
    </div>
  )
}

export default Item