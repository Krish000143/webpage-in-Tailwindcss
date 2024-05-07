import react from 'react'

import Header from './components/Header';
import Home from './components/Home'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css'

function App(){
  return(
  <>
    <Header />
    <Home />
    <Features/>
    <About/>
    <Contact/>
    <Footer/>
    
  </>)
}

export default App
