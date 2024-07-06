import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../componets/Login'
import { useForm } from "react-hook-form";

function Signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <div  className="w-[600px]">
  <div className="modal-box  dark:bg-slate-900 dark:text-white">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
    <h3 className="font-bold text-lg text-blue-500">SignUp!</h3>
    <div className='mt-3 space-y-2'>
      <span>Name</span>
      <br />
      <input type="text" placeholder='Enter your Full Name' className=' dark:bg-slate-900 dark:text-white w-80 px-3 py-1 border outline-none rounded-md' {...register("text", { required: true })}/>  <br />
      {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-3 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email" placeholder='Enter your Email' className=' dark:bg-slate-900 dark:text-white w-80 px-3 py-1 border outline-none rounded-md' {...register("email", { required: true })}/> <br />
      {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
{/* Pasward */}
    <div className='mt-3 space-y-2'>
      <span>Passward</span>
      <br />
      <input type="password" placeholder='Enter your Passward' className=' dark:bg-slate-900 dark:text-white w-80 px-3 py-1 border outline-none rounded-md' {...register("password", { required: true })}/> <br />
      {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='flex justify-around mt-4 '>
      <button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200 cursor-pointer'>SignUp</button>
      <p className='text-xl'>Have account? 
        <span className='text-blue-400 font-semibold underline px-2 hover:text-blue-700 hover:bg-blue-100 duration-200 cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</span>
        <Login/>
        </p>
        
        
    </div>
    </form>

  </div>
</div>
        </div></>
  )
}

export default Signup