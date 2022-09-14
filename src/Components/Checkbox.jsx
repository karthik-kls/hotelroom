import React from 'react'
import Checkingcomponents from '../Components/Checkingcomponents'
import '../Components/Checkbox.css'
const Checkbox = ({title,data,text,bgclr,color}) => {
  return (

    <div>
      <div className='title'>

        <div>{title}</div>
      </div>
      {data.map((data,index)=>
      {
        return(
          <Checkingcomponents data={data} key={index} text={text} bgclr={bgclr} color={color}/>
        )
      })}

    </div>
  )
}

export default Checkbox