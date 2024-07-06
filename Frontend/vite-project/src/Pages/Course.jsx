import React from 'react'
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import Courses from '../componets/Courses';


function Course() {
  return (
    <>
    <div className=' dark:bg-slate-900 dark:text-white'>
        <Navbar/>
        <div><Courses/></div>
        <Footer/>
        </div>
        </>
  )
}

export default Course;