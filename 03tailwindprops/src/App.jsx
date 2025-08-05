import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card image="https://imgs.search.brave.com/AmDIwga6ag-U9vLbvbtpRTBcsI6oM9LwMpiArg4n60E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTM2/MDQ0MjQwL3Bob3Rv/L21hcmluZS1kcml2/ZS1pbi1tdW1iYWku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVMzYy0yTGVIZFBf/cm9mUWJMaHR5dEtT/WVRQbjhudDZCT1N2/UjdLeVhYMGM9"/>
    </>
  )
}

export default App
