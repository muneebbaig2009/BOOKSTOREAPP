import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";


function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const handleCloseDialog = () => {
    const dialog = document.getElementById('my_modal_3');
    dialog.close();
  };

  console.log(watch("example"));
  return (
    <>
    <div className=''>
    <dialog id="my_modal_3" className="modal ">
  <div className="modal-box  dark:bg-slate-900 dark:text-white">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseDialog}>✕</button>
    
    <h3 className="font-bold text-lg text-blue-500">Login!</h3>
    <div className='mt-3 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email" placeholder='Enter your Email' className='  dark:bg-slate-900 dark:text-white w-80 px-3 py-1 border outline-none rounded-md' {...register("email", { required: true })}/> <br />
      {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
{/* Pasward */}
    <div className='mt-3 space-y-2'>
      <span>Passward</span>
      <br />
      <input type="password" placeholder='Enter your Passward' className='  dark:bg-slate-900 dark:text-white w-80 px-3 py-1 border outline-none rounded-md' {...register("password", { required: true })}/> <br />
      {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='flex justify-around mt-4 '>
      <button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200 cursor-pointer'>Login</button>
      <p className='text-xl'>Not registered? 
        <Link to="/signup"><span className='text-blue-400 font-semibold underline px-2 hover:text-blue-700 hover:bg-blue-100 duration-200 cursor-pointer'>SignUp</span></Link>
        </p>
    </div>
    </form>
  </div>
  
</dialog>
    </div>
    </>
  )
}

export default Login