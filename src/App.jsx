import { useState } from 'react'
import About from './pages/About'
import './App.css'
import Questions from './pages/Questions'
import Contactus from './pages/Contactus'
import Success from './pages/Success'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Contactus/> 
      <Questions/> 
     <About/>
     <Success/>
     
     
     
    </>
  )
}

export default App
