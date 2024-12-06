import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './main';
import './main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Contact from './pages/contact';
//import reportWebVitals from './reportWebVitals';
const routes = [
  { path: '/', name: 'Home', element: <Home />},
  { path: '/about', name: 'About', element: <About />},
  { path: '/experience', name: 'Experience', element: <Experience />},
  { path: '/projects', name: 'Projects', element: <Projects />},
  { path: '/contact', name: 'Contact', element: <Contact />},
]
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
