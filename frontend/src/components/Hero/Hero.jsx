import React from 'react'
import './Hero.css'
import hand_icon from   '../Assests/hand_icon.png'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Based on what you search</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>Mobiles</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest tech</div>
        </div>
      </div>
      <div className='hero-right'>

      </div>
    </div>
  )
}

export default Hero
