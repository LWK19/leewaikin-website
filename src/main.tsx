import './main.css';
import React from 'react';
import * as T from './template.tsx';
import Home from './pages/home.tsx';
import About from './pages/about.tsx';
import Contact from './pages/contact.tsx';
import Experience from './pages/experience.tsx';
import Projects from './pages/projects.tsx';

import { Routes, Route } from 'react-router-dom';

function App(props:React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
  return (
    <div className="text-center bg-slate-900 text-white min-h-screen min-w-screen">
      <T.NavBar> </T.NavBar>
      <T.SideBar> </T.SideBar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
