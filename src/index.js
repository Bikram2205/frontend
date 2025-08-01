import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Homepage from './landing_page/Home/Homepage';
import Project from './landing_page/Project/Projectpage';
import Profile from './landing_page/Profile/Profilepage';
import Contuct from './landing_page/Contuct/Contuctpage';
import About from './landing_page/About/Aboutpage';
import Notfound from './landing_page/Notfound';
import Footer from './Footer';
import Navbar from './Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/Project' element={<Project />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/Contuct' element={<Contuct />} />
      <Route path='/About' element={<About />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
