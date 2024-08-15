import React from 'react'
import Navbar from './Navbar'

export default function Dashbord() {
  return (
    
    <div className='h-screen w-screen bg-gradient-to-r from-black to-indigo-900 ' >
      <Navbar/>
      <div className="main mt-2 flex flex-col items-center justify-center font-semibold content-center text-white ">
        <h1 className='text-3xl'>Total notes 67</h1>
        <div className="btns gap-2 flex flex-col items-center justify-center">
          <button className="btn">Delete note</button>
          <button className="btn">Delete all notes</button>
          
        </div>
      </div>
    </div>
  )
}
