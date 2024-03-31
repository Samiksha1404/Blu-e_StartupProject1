import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Help from './components/products/Products.jsx'
import Services from './components/Service/Services.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Products from './components/products/Products.jsx'
import Faqs from './components/FAQS/Faqs.jsx'
import Contack from './components/Contact/Contack.jsx'
import Location from './components/location/Location.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
     <Route path='' element={<Home/>} />
     <Route path='about' element={<About/>} />
     <Route path='help' element={<Help/>} />
     <Route path='services' element={<Services/>} />
     <Route path='products' element={<Products/>} />
     <Route path='faqs' element={<Faqs/>} />
     <Route path='contact' element={<Contack/>} />
     <Route path='location' element={<Location/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

