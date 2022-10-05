import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

// Screens
import Home from './Home'
import Signup from './Signup'

const Wrapper = () => {
  return (
    <>
      <Home />

      <Outlet />
    </>
  )
}

export default Wrapper