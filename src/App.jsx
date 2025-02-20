import React, { Children } from 'react'
import './Components/header/Header'
import Footer from './Components/footer/footer'
import Header from './Components/header/Header'
import HomePage from './pages/HomePage'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import HomeRoutes from './routes/HomeRoutes'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Productdetails from './pages/Productdetails'
import Category from './pages/Category'
import Dashboard from './pages/Dashboard'


const App = () => {
  const routes = createBrowserRouter([
    {
      path:"",
      element: <HomeRoutes />,
      children:[
        {
          path: "",
          element: <HomePage/>

        },
        {
          path:"/login",
          element: <Login/>
        },
        {
          path:"/signin",
          element:<Signup/>
        },
        {
          path:"/cart",
          element: <Cart/>
        },
        {
          path:"/checkout",
          element:<Checkout/>
        },
        {
          path:"/productdetails",
          element:<Productdetails/>
        },
        {
          path:"/category",
          element:<Category/>
        },
       
        
      ]
      
    },
    
    {
      path:"/dashboard",
      element:<Dashboard/>
    }
  ])
  return (
    <RouterProvider router={routes}/>

  )
}

export default App