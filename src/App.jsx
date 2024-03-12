import { useState, useEffect} from 'react'
import axios from "axios"
import Animes from './components/Animes'
import Navbar from './components/Nav'
import Footer from './components/Footer'
import './App.css'
import NewAnimeForm from './components/NewAnimeForm'

const API = import.meta.env.VITE_API

function App() {

  return(

    <div className='App'> 
    <Navbar/>
    <section className='anime-section'>
      <Animes/>
      <NewAnimeForm/>
    </section>
    <Footer/>
    </div>

  )
}

export default App
