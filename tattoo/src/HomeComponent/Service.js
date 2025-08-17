import image1 from '../pics/ink.png'
import image2 from '../pics/laser.png'
import image3 from '../pics/piercing.png'
import image4 from '../pics/remove.png'
import { motion } from "framer-motion"

export default function Service() {
  return (
    <div id="service" className="bg-BACK xl:px-40 lg:px-28 px-8 pt-36">
      <div className="relative mx-auto max-w-5xl text-center pt-7 pb-7">
        <h2 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-SHADE">
          What we do
        </h2>
      </div>
      
      <div className='pt-6'>
        <div className="container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mx-auto">
          {/* Tattooing */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="grid gap-4 justify-items-center text-center md:flex-1 my-10 py-5 px-5 rounded-3xl"
          >
            <div className="rounded-full p-4">
              <img className="w-14 h-14" src={image1} />
            </div>
            <h3 className="text-3xl font-bold text-TEXT">Tattooing</h3>
            <p className='text-TEXT text-sm'>Vibrant designs that make a bold statement.</p>
          </motion.div>

          {/* Piercing */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: [20, 0, 20] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="grid gap-4 justify-items-center text-center md:flex-1 my-10 py-5 px-5 rounded-3xl"
          >
            <div className="rounded-full p-4">
              <img className="w-14 h-14" src={image2} />
            </div>
            <h3 className="text-3xl font-bold text-TEXT">Piercing</h3>
            <p className='text-TEXT'>Express yourself with stunning body art.</p>
          </motion.div>

          {/* Cover up */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="grid gap-4 justify-items-center text-center md:flex-1 my-10 py-5 px-5 rounded-3xl"
          >
            <div className="rounded-full p-4">
              <img className="w-14 h-14" src={image3} />
            </div>
            <h3 className="text-3xl font-bold text-TEXT">Cover up</h3>
            <p className='text-TEXT'>Transform old ink into new masterpieces.</p>
          </motion.div>

          {/* Removing */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: [20, 0, 20] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="grid gap-4 justify-items-center text-center md:flex-1 my-10 py-5 px-5 rounded-3xl"
          >
            <div className="rounded-full p-4">
              <img className="w-14 h-14" src={image4} />
            </div>
            <h3 className="text-3xl font-bold text-TEXT">Removing</h3>
            <p className='text-TEXT'>Fade away old tattoos with care.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
