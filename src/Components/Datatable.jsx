import React from 'react'

const Datatable = ({data}) => {
  return (
    <div className='valuetableroom'>
    <div>{data.roomnumber}</div>
    <div>{data.adultcapacity}</div>
    <div>{data.childrencapacity}</div>
    <div>{data.price}</div>
    </div>

  )
}

export default Datatable