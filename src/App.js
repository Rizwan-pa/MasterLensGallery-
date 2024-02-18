import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import React from 'react'
import First from './firstpage/First';
import About from './about/About';
import Contact from './contact/Contact';

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<First/>}></Route>
                <Route path='/About' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default App
