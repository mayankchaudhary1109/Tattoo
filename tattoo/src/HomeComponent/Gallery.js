import React from 'react';
import image1 from '../pics2/tattoo1.jpg'
import image2 from '../pics2/tattoo2.jpg'
import image3 from '../pics2/tattoo3.jpg'
import image4 from '../pics2/tattoo4.jpg'
import image5 from '../pics2/tattoo5.jpg'
import image6 from '../pics2/tattoo6.jpg'
import image7 from '../pics2/tattoo7.jpg'
import image8 from '../pics2/tattoo8.jpg'
import image9 from '../pics2/arms.jpg'
import image10 from '../pics2/arms2.jpg'
import image11 from '../pics2/neck.jpg'
export default function Gallery() {
  return (
    <div id="gallery" className="w-12/12 bg-BACK pt-20 pb-40">
      <div className="relative max-w-5xl pt-7 pb-10 mx-auto">
        <h2 className="text-4xl text-center  tracking-tight font-extrabold sm:text-5xl md:text-6xl text-SHADE">
          Gallery
        </h2>
      </div>
      <div className="bg-Back w-12/12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-10/12 mx-auto bg-BACK">

          {/* Column 1 */}
          <div className="group cursor-pointer relative row-span-2">
            <img
            src={image1}
              alt="Image 1"
              className="w-full h-96 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>

          <div className="group cursor-pointer relative">
            <img
            src={image2}
              alt="Image 2"
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div className="group cursor-pointer relative">
            <img
            src={image3}
              alt="Image 3"
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>

          <div className="group cursor-pointer relative row-span-2">
            <img
            src={image4}
              alt="Image 4"
              className="w-full h-96 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>

          {/* Column 3 */}
          <div className="group cursor-pointer relative">
            <img
            src={image5}
              alt="Image 5"
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>

          <div className="group cursor-pointer relative row-span-2">
            <img
            src={image6}
              alt="Image 6"
              className="w-full h-96 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>

          {/* Column 4 */}
          <div className="group cursor-pointer relative">
            <img
            src={image7}
              alt="Image 7"
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>

          <div className="group cursor-pointer relative">
            <img
            src={image8}
              alt="Image 7"
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>
          <div className="group cursor-pointer relative">
            <img
            src={image9}
              alt="Image 8"
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
