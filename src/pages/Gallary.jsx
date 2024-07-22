import React from 'react'
import GallaryImage from '../components/core/CommonGallary/GallaryImage'
const Gallary=()=> {
  return (
     
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
      <div className="mb-8">
        <p className="text-4xl font-bold text-gray-800 mb-4 text-center">Company Gallery Image</p>
        <p className="text-lg text-gray-600 text-center">Explore our collection of beautiful images</p>
      </div>
      <GallaryImage/>
    </div>
  )
}

export default Gallary;