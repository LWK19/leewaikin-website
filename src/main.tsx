import './main.css';
import React from 'react';
import * as T from './template.tsx';
import Home from './pages/home.tsx';
import About from './pages/about.tsx';
import Contact from './pages/contact.tsx';
import Experience from './pages/experience.tsx';
import Projects from './pages/projects.tsx';


import { useLocation,useOutlet } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { createRef } from 'react'

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const routes = [
    { path: '/', name: 'Home', element: <Home />, nodeRef: createRef<HTMLDivElement>() },
    { path: '/about', name: 'About', element: <About />, nodeRef: createRef<HTMLDivElement>() },
    { path: '/experience', name: 'Experience', element: <Experience />, nodeRef: createRef<HTMLDivElement>()},
    { path: '/projects', name: 'Projects', element: <Projects />, nodeRef: createRef<HTMLDivElement>()},
    { path: '/contact', name: 'Contact', element: <Contact />, nodeRef: createRef<HTMLDivElement>()},
  ]
  const nodeRR = routes.find((route) => route.path === location.pathname)!
  function scrollTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      })
  };
  return (
    <div className="bg-bg-main">
      <div className=" text-center bg-bg-main text-white min-h-screen min-w-screen flex flex-col">
      <T.NavBar/>
      <T.SideBar/>
      <SwitchTransition>
        <CSSTransition key={location.pathname} nodeRef={nodeRR.nodeRef} timeout={500} classNames='content' onEnter={scrollTop} unmountOnExit>
          {(state) => (
            <div ref={nodeRR.nodeRef} className='grow flex flex-col'>
              <T.Content>
                {currentOutlet}
              </T.Content>
              <T.Footer/>
            </div>
          )}
          </CSSTransition>
      </SwitchTransition>
      
    </div>
    </div>
    
  );
}

export default App;
