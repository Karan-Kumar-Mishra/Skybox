import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar'
import Contact from './Contact'
import Dashbord from './Dashboard';
import Listnotes from './Listnotes'
import About from './About'
import Profile from './Profile'
import Setting from './Setting'
export default function Mainapp() {
  return (
    <div>
       <Router>

       <Routes>
        <Route path="/" element={<Listnotes/>} />
        <Route path="/dashboard" element={<Dashbord/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/settings" element={<Setting/>} />
      </Routes>
       </Router>
    </div>
  )
}
