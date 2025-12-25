import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route} from "react-router-dom" ;
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPage from "./components/AboutPage";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactSectionModern from "./components/ContactSectionModern";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero />
    <AboutPage/>
    <Services/>
    <Projects/>
    <ContactSectionModern/>
    <Footer/>

    
    


    </>
    
    
  )
}

export default App