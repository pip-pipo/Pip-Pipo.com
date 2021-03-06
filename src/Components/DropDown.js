import React from 'react'
import {Button} from './data/Button';
import {Link} from 'react-router-dom'
import "./DropDown.css"
const DropDown = () => {
    return (
        <div className="dropDown">
           <ul className="dropDown__menu">
               {
                   Button.map((value,item)=>(
                       <li >
                           <a href={value.path}>{value.title}</a>
                       </li>
                   ))
               }
           </ul> 
        </div>
    )
}

export default DropDown
