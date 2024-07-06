import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import ContactUs from '../componets/ContactUs'

function Contact() {
  return (
    <>
    <div className=' dark:bg-slate-900 dark:text-white'>
        <Navbar/>
        <div className='dialog'><ContactUs/></div>
        <Footer/>
    </div>
    </>
  )
}

export default Contact