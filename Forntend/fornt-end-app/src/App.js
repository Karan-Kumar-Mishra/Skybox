import React, { Component,props } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './compenent/Navbar'
import Notification from './compenent/Notification'
import About from './compenent/About';
import Listnote from './compenent/Listnotes'
import Setting from './compenent/Setting'
import Start from './compenent/Start'
import NotFound from './compenent/NotFound';

export default class App extends Component {

  render() {
    return (
      <div>
          <Router>




          <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/home" element={<Listnote/>} />
        <Route path="/settings" element={<Setting/>} />
        <Route path="*" element={<NotFound />} /> 
        </Routes>
          </Router>
     
      </div>
    )
  }
}
