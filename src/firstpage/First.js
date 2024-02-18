import React from 'react'
import Header from './Header'
import Banner from './Banner'
import { Link } from 'react-router-dom';
function First() {
  return (
    <div>
       
    <Header/>
    <Link to="/About" style={{textDecoration:'none'}}>
    <Banner title='Capturing Moments: Welcome To My World' image='https://shihabphotography.com/wp-content/uploads/2013/02/SHIHAB-bio.jpg' />
    </Link>
    <Banner title='Though The Lens'  image='https://png.pngtree.com/background/20230614/original/pngtree-an-old-man-looking-at-the-camera-picture-image_3511874.jpg'/>
    <Banner title='Sports' image='https://cdn.shopify.com/s/files/1/0243/7080/6862/files/How-difficult-is-it-to-play-golf-1.png?v=1616941932'/>
    <Banner title='Travels' image='https://prd-sc102-cdn.rtx.com/-/media/ca/product-assets/marketing/a/airplanes-brussels-airport-getty-637243664-mod.jpg?rev=bdc22e3766084401848f8b1ce124cc03'/>
    </div>
  )
}

export default First
