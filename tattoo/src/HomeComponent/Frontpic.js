

import image1 from '../pics/ink1.jpg'

export default function Frontpic() {
  return (
    <div id="frontpic" className="relative mx-auto mt-20 h-[500px]">
      <img 
        className="w-full h-full object-cover" 
        src={image1} 
        alt="Random image"
      />
      <div className="absolute inset-0 opacity-40 rounded-md"></div> {/* Adjusted opacity */}
      <div className="absolute inset-0 margin-auto text-center  items-center justify-center">
      <h2 className="text-TEXT text-xl font-bold mt-28">Belive in yourself</h2>
          <h2 className=" md:text-5xl text-3xl lg:text-7xl font-extrabold mt-5 italic text-SHADE"><span className="text-SHADE">SABU</span> TATTOO STUDIO</h2>
          <h2 className="text-TEXT text-xl font-bold mt-5">To contact us click here:</h2>
          <button className="text-TEXT border text-xl lg:font-extrabold text-bold mt-10  md:py-2 md:px-3 py-1 px-2 rounded-xl">Contact Us</button>
      </div>
    </div>
  )
}
