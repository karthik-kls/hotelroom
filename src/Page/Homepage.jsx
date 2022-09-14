import React from 'react'
import Checkbox from '../Components/Checkbox';
import Navebar from '../Components/Navebar';
import Room from '../Components/Room';
// import Room from '../Components/Room';
// import bed from '../Components/bed.png'

import {Checkin} from '../Components/Checkindata'
import { Checkout } from '../Components/Checkoutdata';


import  '../Page/Homepage.css'
const Homepage = () => {
  return (
    <div className='maincontainer'>
      <div className='navcontainer'><Navebar/></div>
      <div className='hotelbed'></div>
      <div className='checking_section'>
        <div className='checkin'>

        <Checkbox  title='Check in Today' text= 'Check in' bgclr='#008000'  color='#ffffff' data={Checkin}/>

        </div>

        <div className='checkout'>

        <Checkbox title='Check out Today' text= 'Check out' bgclr='#800000'  color='#ffffff' data={Checkout}/>
        </div>
        
    
        {/* <Room/> */}

    </div>
    </div>
  )
}

export default Homepage