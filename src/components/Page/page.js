import React from 'react';
import './page.scss';
import Header from '../Header/header';
import 'animate.css';
import ParticlesBG from '../Particles/particles';
import About from '../About/about';
import { Routes, Route } from 'react-router-dom';
import Contact from '../Contact/contact';
import Project from '../Projects/projects';

function Page() {
  return (
    <>
    <div className='page-container'>
      <Header />
      <Routes>
        <Route exact path='/' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/projects' element={<Project/>} />
    </Routes>
      
    </div>
    <ParticlesBG />
    </>
  );
}

export default Page;
