import React from 'react'
import image1 from '../pics/artistry1.png'
import image2 from '../pics/icon1.png'
import image3 from '../pics/passion1.png'
// import { motion } from "framer-motion"

export default function Skills() {
  return (
      <div className="bg-BACK xl:px-40 lg:px-28 px-8 pt-20 pb-10">
          <div className='pt-6'>
    
          <div className="container  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-auto">
        <div className="grid gap-4 justify-items-center text-center md:flex-1 my-10  py-5 px-5 rounded-3xl">
            <div  className="rounded-full  p-4">
            <img  className="w-18 h-18" src={image1}/>
            </div>
            <h3 className="text-xl font-bold text-TEXT">ARTISTRY</h3>
        </div>
       
        <div className="grid gap-4 justify-items-center text-center md:flex-1 my-10  py-5 px-5 rounded-3xl">
            <div className="rounded-full  p-4">
            <img  className="w-18 h-18" src={image2}/>
            </div>
            <h3 className="text-xl font-bold text-TEXT">DEVOTION</h3>
        </div>
        <div className="grid gap-4 justify-items-center text-center md:flex-1 my-10  py-5 px-5 rounded-3xl">
            <div className="rounded-full  p-4">
              <img  className="w-18 h-18" src={image3}/>
                
    
            </div>
            <h3 className="text-xl font-bold text-TEXT">PASSION</h3>
        </div>
    </div>
    
    
          </div>
          </div>
  )
}
