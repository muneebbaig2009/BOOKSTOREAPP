import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import Course from './Pages/Course'
import Signup from './Pages/Signup'
import Contact from './Pages/Contact'







function App() {
  return (
    <>
      
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Course/> }/>
        <Route path='/signup' element={<Signup/> }/>
        <Route path='/contact' element={<Contact/> }/>
      </Routes>
      </div>
   
    
    </>
  )
}

export default App