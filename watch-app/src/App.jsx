import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  },[])

  return (
    <div className=' overflow-x-hidden bg-white dark:bg-black text-black dark:text-white'>
       <Navbar/>
       <Hero/>
    </div>
  )
}

export default App
