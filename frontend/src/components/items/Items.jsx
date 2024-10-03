import React from 'react'
import './items.css'

const items = (props) => {
  return (
    <div className='items'>
      <img src={props.image} alt={props.name} width={160} height={150}/>
      <p>{props.name}</p>
      <div className="item-prices">
        Rs. {props.price}
      </div>
    </div>
  )
}

export default items
