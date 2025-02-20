import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/header/Header'
import Footer from '../Components/footer/footer'

const HomeRoutes = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeRoutes