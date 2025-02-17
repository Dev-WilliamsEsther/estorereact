import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/header/Header'

const HomeRoutes = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default HomeRoutes