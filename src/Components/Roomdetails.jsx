import React from 'react'
import Roomtable from './Roomtable'
import './Roomdetails.css'
import Button from './Button'

const Roomdetails = ({data}) => {
  return (
    <div className='roombox'>
        <div className='room01'>
        <div className='roomtitle'>Rooms
        <Button text='AddRoom'/>
    </div>
        </div>
        <Roomtable data={data}/>
        

    </div>
  )
}

export default Roomdetails