import React from "react";
 const Button=({btnclr,color,text})=>{
    return ( 
        <div >
            <button style={{backgroundColor:btnclr,color:color}}>{text}</button>

        </div>
    )
 }
  
 export default Button