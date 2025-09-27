import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './components/Login.jsx'
import './App.css'
import Signup from './components/Signup.jsx'
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
    </Routes>
    </>
  )
}

export default App
