import React from 'react'
// import React, { useEffect } from 'react';
// import anime from 'animejs/lib/anime.es.js';
import image from '../pics2/tattoofront.jpeg'
import image1 from '../pics2/tattoofront2.jpeg'
import { motion } from "framer-motion"
export default function About() {


    // useEffect(() => {
    //     anime({
    //       targets: '.anime-heading',
    //       opacity: [0, 1],
    //       translateY: ['-20px', '0px'],
    //       easing: 'easeInOutSine',
    //       duration: 1500,
    //       delay: 500,
    //     });
    //   }, []);


  return (
    <div>
          <section id="about" className="section bg-BACK dark:bg-BACK pt-6">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      <div className="grid grid-cols-2 gap-4 mt-8">
        <motion.div initial={{ x:-70,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration:1.5, }}>
          <img  className="md:ml-8  w-56 rounded-lg" src={image} alt="office content 1"/>
          </motion.div>




          <motion.div initial={{ x:-50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }}>

<img  className="mt-4 w-56 lg:mt-10 rounded-lg" src={image1} alt="office content 2"/>

          </motion.div>
        </div>
        <div className="font-light text-TEXT sm:text-lg dark:text-TEXT">
        <h2 className="mb-4 font-lucida text-4xl tracking-tight font-extrabold sm:text-4xl md:text-5xl text-SHADE dark:text-SHADE anime-heading italic">
  Tattoo Artist
</h2>

          <p className="mb-4 text-TEXT  mt-3 text-base  sm:mt-5 sm:text-lg sm:max-w-xl  md:mt-5 md:text-xl ">
          Tattoos come in various styles, such as traditional, realism, watercolor, minimalist, geometric, and tribal, each with its unique aesthetic. Artists often specialize in specific styles, like realism for lifelike portraits, traditional for bold designs, or fine line for delicate and minimalist tattoos. Some focus on cultural or symbolic work, such as Japanese or tribal tattoos, while others excel at vibrant color or black-and-gray shading.</p>
          
<div className='flex gap-5'>
 {/* <Link to="https://wa.me/8199013477" target="_blank"> */}
                {/* <button className="px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2 mt-10 border-SHADE">
                  <div className="text-lg text-SHADE">Contact Us</div>
                 
                </button> */}
              {/* </Link> */}
            
              </div>
        </div>
       
      </div>
    </section>
    </div>
  )
}
