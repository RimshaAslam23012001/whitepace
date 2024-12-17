import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project';
import YourWork from './components/YourWork';
import Sponser from './components/Sponser';
import Footer from './components/Footer';

function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Project />
    <YourWork/>
    <Sponser />
     <Footer /> 
    </>
  )
}

export default Home;

