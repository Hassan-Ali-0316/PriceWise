import React from 'react'
import './Hero.css'
import hand_icon from   '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/latest.png'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <div>
            <div className="hero-hand-icon">
                <img src={hand_icon} alt="" />
            </div>
            <p>Mobiles</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest tech</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className='hero-right'>
        <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
