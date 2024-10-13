import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { HeroSecton } from './components/HeroSection'
function App() {
  return (
    <div>
      <Navbar />
      <HeroSecton />
    </div>
  )
}

export default App
