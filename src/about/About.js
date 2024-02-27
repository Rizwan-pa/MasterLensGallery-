import React from 'react'
import './about.css'
import Header from '../firstpage/Header';
function About() {
  return (
    <div>
        <Header/>
        <div className='imagealign'>
             <div className='imageblock'>
                <div className='content'>
                     <img src='.\images\1578837934415.jpg'></img>
                </div>
              </div>
        </div>
       <br/>
       <br/>
       <div className='detail'>
          <h2 align={"center"} style={{marginLeft:'10px',fontSize:'35px', }}>Biography...</h2>
          <p>
          “There are always two people in every picture: the photographer and the viewer.” -Ansel Adams
           Creative spirit has always been a part of Shihab.When he captures a moment through his lens, it is eternalized for the viewer through the photographer. Born on 1st November, 1973 near Cochin in a south Indian state named Kerala, Shihab’s passion for photography evolved during his school days.
          </p>
          <p>
          He was intrigued by the visually striking moments, may be because of their colour composition or just the moment’s rarity in time. After adolescence spent clicking photos whenever he got an opportunity, Shihab, the shutterbug, pursued a post graduate diploma in Journalism at Bharatiya Vidya Bhavan for the very purpose of nurturing his passion into a profession. His career took wings immediately after he successfully completed the course and Shihab found himself working as a photojournalist with leading daily newspaper Malayala Manorama in 1997.
          </p>
          <p>
          Inspired by legends like James Nachtwey, Steve McCurry and Raghu Rai, Shihab gives his special touch to his photography—be it spot news, sports events, feature stories or fashion shows. Portraying people and places, special moments and spectacular events, his lens brought out a world unknown to many and broke umpteen number of news stories. He developed a sharp eye in street photography and photo features. Portraying in Black & White is his yet another passion in photography.
          </p>
          <p>
          In 2001, when Tsunami hit various parts of the world, Shihab captured many unforgettable and pathetic scenes after the devastation. Ten years later, his lens covered the civil war in Libya and captured the violence and life in refugee camps.
          With several prestigious awards at state and national levels to his credit, Shihab has conducted many photo exhibitions as well. Vocal through his creations, Shihab is currently bringing out the best of digital photography for Khaleej Times, a leading newspaper in Dubai, where he joined in 2006.
          </p>
       </div>
       <br></br>
       <br></br>
       <div className='achieve-container'>
       <div className='achievements'>
           <div className='data'>
           <h1>Major Awards and Distinctions:</h1>
           <p>
           1.Kerala Government Award for the best News Photographer of the year 2005.<br></br>
           2.Swadesabhimani Award for the best Photograph of the year 2005.<br></br>
           3.Chief Editor’s Gold medal for the best performance year 2000.<br></br>
           4.Punarjani Award in 2004.<br></br>
           5.Fine Arts Society Award.<br></br>
           6.Road safety award.<br></br>
           7.Photography society of Kerala award.<br></br>
           8.Victor George memorial award.<br></br>
           9.SPCA award (Society for the Prevention of Cruelty of Animals) etc.<br></br>
           </p>
           </div>
       </div>
       </div>
       <p align={"center"}>Shihab Mohammad</p> 
       <p align={"center"}>shihabmohammed@gmail.com</p>   
       <p align={'center'}>© shihab photography 2017 All Rights Reserved.</p>
    </div>
  )
}

export default About
