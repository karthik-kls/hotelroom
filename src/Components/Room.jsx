import React from 'react'
import Navebar from './Navebar'
import { Dataroom } from './Dataroom'
import Roomdetails from './Roomdetails'

const Room = () => {
  return (
    <div>
      <Navebar/>
      <Roomdetails data={Dataroom}/>

        
    </div>
  )
}

export default Room