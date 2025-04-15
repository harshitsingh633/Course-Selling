import { Router } from 'express'
import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import App from '../App'
import login from '../components/login'

const loginRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Router path="/" element={<App/>}/>
        <Router path="/login" element={<login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default loginRoute