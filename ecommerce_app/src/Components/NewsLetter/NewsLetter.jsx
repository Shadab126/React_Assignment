import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email and Mobile</h1>
      <p>Subscribe to our Website and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
