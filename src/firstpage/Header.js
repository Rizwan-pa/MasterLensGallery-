import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
  <div>
    <div className='outer' onClick={()=>{console.log("hello")}}>
       <div className='head'>
        
             <Link to="/" className='op' id='ma'><h4>HOME</h4></Link>
             <Link to="/About" className='op'><h4>ABOUT</h4></Link>
             <h2 >SHIHAB <span>PHOTOGRAPHY</span></h2>
             <Link to="/contact" className='op'><h4>CONTACT</h4></Link>
             <Link to="/" className='op' id='pa'><h4>PRESS</h4></Link>
             
           
       </div> 
    </div>
    <div style={{height:'1rem'}} ></div>
    </div>
  )
}

export default Header
