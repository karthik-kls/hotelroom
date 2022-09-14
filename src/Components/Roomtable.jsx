import React from 'react'
import Datatable from './Datatable'
import './Roomtable.css'

const Roomtable = ({data}) => {
  return (
   <div className='roomtabletitle'>
    <div className='room3'>
    <div>Room Number</div>
    <div>Adult Capacity</div>
    <div>Children Capacity</div>
    <div>Price</div>
    </div>
    <div className='list'>
    {data.map((data,index)=>{
        return(
            <Datatable data={data} key={index} />

        )
    })}
    </div>
   </div>
  )
}

export default Roomtable