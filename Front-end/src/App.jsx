import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{ createBrowserRouter,RouterProvider } from 'react-router-dom'

import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path :"/about",
      element:<About/>
    },
    {
      path :"/contact",
      element:<Contact/>
    }
  ])

  return (
    <>
    
    </>
  )
}

export default App
