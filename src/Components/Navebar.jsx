import React from 'react'
import {useState} from 'react'
import { NavLink} from 'react-router-dom';
import suitcase from './suitcase.svg'
import user from './user.svg'
import logout from './logout.svg'
import "./Navebar.css"
function Navebar() {

const [navoption, setNavoption]= useState('homepage')
  return (
    <div className='navbar'>
        <div className='leftnav'>
            <div className='optionnav'>
                <img className='optionnav' src={suitcase} alt="" width='30px' height= '30px'/></div>
                <div className='optionnav'><h3>Booking System</h3></div>
                <div className={navoption === 'homepage' ? 'optionnav selectedoption ':' optionnav view'} onClick={()=>{setNavoption('homepage')}}>
                <NavLink to='/' className= 'link' style={navoption==='homepage'?{color:'orange'}:{color:'black'}}>Homepage</NavLink></div>
                <div className={navoption === 'room' ? 'optionnav selectedoption  ':' optionnav view'} onClick={()=>{setNavoption('room')}}>
                <NavLink to='/room' className= 'link' style={navoption==='room'?{color:'orange'}:{color:'black'}}>Room</NavLink></div>
                <div className={navoption === 'booking' ? 'optionnav selectedoption ':' optionnav view'} onClick={()=>{setNavoption('booking')}}>
                <NavLink to='/booking' className= 'link' style={navoption==='booking'?{color:'orange'}:{color:'black'}}>Booking</NavLink></div>
        </div>
        <div className='rightnav'>
            <div className='optionnav' >
            <img className='optionnav' src={user} alt="" width='30px' height= '30px'/></div>
            <div className='optionnav' >Administrator</div>
            <div className='optionnav' >
            <img className='optionnav' src={logout} alt="" width='30px' height= '30px'/></div>
        </div>
        
        
    </div>
  )
}

export default Navebar