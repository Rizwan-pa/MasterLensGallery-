import React from 'react'

import './banner.css'
function Banner(params) {

  return (
    <div className='banne'>
      <div className='imag' style={{backgroundImage:`url(${params.image? params.image: ''})`}}>
       
       <div >
           <h2 className='title' >{params.title}<br></br>
                    <span className='arrow'>></span> </h2>
       </div>
       </div>
       <div style={{height:'2rem'}} ></div>
    </div>
  )
}

export default Banner
