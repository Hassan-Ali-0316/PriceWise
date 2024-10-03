import React from 'react'
import './popular.css'
import data_product1 from '../Assets/data1'
import data_product2 from '../Assets/data2'
import Items from '../items/Items'

const popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN MOBILES</h1>
      <hr />
      <div className='popular-item'>
        {data_product1.map((items,i)=>{
            return <Items key={i} id={items.id} name={items.name} image={items.image} price={items.price}/>
        })}
      </div>
      <h1>POPULAR IN LAPTOPS</h1>
      <hr />
      <div className='popular-item'>
        {data_product2.map((items,i)=>{
            return <Items key={i} id={items.id} name={items.name} image={items.image} price={items.price}/>
        })}
      </div>
    </div>
  )
}

export default popular
