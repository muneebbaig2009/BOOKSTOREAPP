import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../componets/Login'
import { useForm } from "react-hook-form";

function ContactUs() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example"));
  return (
    <>
    <div className='pt-12'>
    <div  className="flex py-12 items-center justify-center h-screen ">
  <div className="  bg-base-200 p-4 md:w-screen max-w-lg  dark:bg-slate-700 dark:text-white">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="font-bold text-blue-500 text-2xl md:text-4xl dark:text-pink-500">Contact Us!</h3>
    <div className='mt-3 space-y-2'>
      <span>Name</span>
      <br />
      <input type="text" placeholder='Enter your Full Name' className='dark:bg-slate-900 dark:text-white w-80 px-3 py-1  border outline-none rounded-md' {...register("text", { required: true })}/>  <br />
      {errors.text && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-3 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email" placeholder='Enter your Email' className='dark:bg-slate-900 dark:text-white  w-80 px-3 py-1 border outline-none rounded-md' {...register("email", { required: true })}/> <br />
      {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-3 space-y-2'>
      <span>Contact Number</span>
      <br />
      <input type="tel" pattern='[0-9]{4}-[0-9]{7}' placeholder='Enter your Number (0315-5142155)' className='dark:bg-slate-900 dark:text-white  w-80 px-3 py-1 border outline-none rounded-md' {...register("tel", { required: true })}/> <br />
      {errors.tel && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
{/* Pasward */}
    <div className='mt-3 space-y-2'>
      <span>Message</span>
      <br />
      <textarea placeholder='Enter your Message' className='dark:bg-slate-900 dark:text-white  w-80 px-3 py-1 border outline-none rounded-md h-32' {...register("textarea", { required: true })}/> <br />
      {errors.textarea && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className=' mt-4 '>
      <button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200 cursor-pointer'>Submit</button>
      
        
        
    </div>
    </form>

  </div>
</div>
        </div>
    </>
  )
}

export default ContactUs