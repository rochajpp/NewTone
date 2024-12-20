import React, { lazy } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//import Home from "./pages/Home/Home.jsx"
//import Apod from "./pages/Apod/Apod.jsx"

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Apod = lazy(() => import('./pages/Apod/Apod.jsx'));
const Iss = lazy(() => import('./pages/Iss/Iss.jsx'));
const Epic = lazy(() => import('./pages/Epic/Epic.jsx'));


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apod" element={<Apod />} />
        <Route path="/iss" element={<Iss />} />
        <Route path="/epic" element={<Epic />} />
      </Routes>
    </Router>
  )
}

export default App
