import React from 'react'
import '../Components/Checkingcomponent.css'
import Button from './Button'
const Checkingcomponents = ({data,text,color,bgclr}) => {
  return (
    <div>
        <div className='box'>
            <div className='name'>
            <div className='innername'>{data.name}</div>
                <div>{data.id}</div>
            </div>
            <div>{data.place}</div>
            <div>{data.date}</div>
            <Button text={text} color={color} btnclr={bgclr}/>
        </div>
    </div>

  )
}

export default Checkingcomponents