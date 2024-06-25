import './App.css';
import Navbar from './copms/navbar';
import React, {Suspense,lazy} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const About = lazy(()=>import('./copms/About'));
const Home = lazy(()=>import('./copms/Home'));
const Explore = lazy(()=>import('./copms/Explore'));
const Cart = lazy(()=>import('./copms/Cart'));


function App() {
  return (
    <>
        <Router>
        <Navbar />
        
        <Suspense fallback = {<div>Loading data...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </Router>


    </>
  );
}

export default App;
