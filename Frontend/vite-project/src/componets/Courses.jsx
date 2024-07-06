import React from 'react'
import {Link} from 'react-router-dom'
import list from '../../public/List.json'
import Cards from './Cards';
function Courses() {

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 min-h-screen'>
        <div className='pt-28 items-center justify-center text-center'>
        <div className='text-2xl  md:text-4xl'>
            <h1>We are <span className='text-blue-500 font-semibold'>delighted</span> to have you <span className='text-pink-500 font-semibold'>Here!:)</span></h1>
            
        </div>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsam quae, magni voluptas dolores eaque odio dolor voluptates, eius sed modi? Maxime dicta incidunt molestiae eaque necessitatibus voluptatem quod corporis!</p>
        <Link to="/">
        <button className='text-white bg-pink-500 hover:bg-pink-700 cursor-pointer mt-12 rounded-md px-2 py-1 text-xl'>Back</button>
        </Link>
        </div>
        <div className='grid mt-6 grid-cols-1 md:grid-cols-4 space-x-2'>
        {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>

    </div>
    </>
  )
}

export default Courses