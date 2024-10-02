import React, { useState } from 'react'
import './/Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom'
function Navbar() {

  const [menu,setMenu] = useState("mobile")

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>PRICEWISE</p>
      </div>
      <ul className="nav-menu">
      <li onClick={()=>{setMenu('Home')}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==='Home'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('Mobile')}}><Link style={{textDecoration: 'none'}} to='/mobiles'>Mobile</Link>{menu==='Mobile'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('Laptops')}}><Link style={{textDecoration: 'none'}} to='/laptops'>Laptop</Link>{menu==='Laptops'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('Headphones')}}><Link style={{textDecoration: 'none'}} to='/headphones'>Headphone</Link>{menu==='Headphones'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('Earbuds')}}><Link style={{textDecoration: 'none'}} to='/earbuds'>Earbud</Link>{menu==='Earbuds'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('Smartwatches')}}><Link style={{textDecoration: 'none'}} to='/smartwatches'>Smartwatch</Link>{menu==='Smartwatches'?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" width={25} height={25}/></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
