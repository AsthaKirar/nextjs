"use client"
import React from 'react'
import{useState} from "react"

const page = () => {
  const [number,setnumber]=useState(0)
  return (
    <div>
      <h1 className='bg-red-500 p-10'>
        <h1 className='text-white-500 text-3xl'>{number}</h1>
        <button onClick={()=>{setnumber(number+2)}} className='px-2 py-2 rounded-md bg-green-500'>increase</button>
      </h1>
    </div>
  )
}

export default page