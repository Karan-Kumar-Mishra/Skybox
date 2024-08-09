import React from 'react'
import Navbar from './Navbar'

export default function Dashbord() {
  return (
    
    <div className='h-screen w-screen bg-gradient-to-r from-black to-indigo-900 ' >
      <Navbar/>
      <div className="main mt-3 flex justify-center font-semibold content-center text-white">
        <h1 className='text-3xl'>Total notes 67</h1>
          
      </div>
    </div>
  )
}
