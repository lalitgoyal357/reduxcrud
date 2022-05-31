import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Adduser from './pages/adduser'
import EditUser from './pages/edituser'
import Home from './pages/home'
import Navbar from './pages/navbar'
//import Navbar from "./pages/navbar"
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/adduser" element={<Adduser/>}/>
      <Route path="/edituser/:id" element={<EditUser/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App