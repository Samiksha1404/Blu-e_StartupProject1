import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Header/Nav.jsx'
import Footer from './components/footer/Footer.jsx'

function Layout() {
  return (
    <>
   <div className="dark:bg-slate-950 ">
   <Nav/>
   <Outlet />
   <Footer/>
   </div>
    </>
  )
}

export default Layout


