import React from 'react'
const Hero = () => {
  return (
    <>
    <div className='mt-2 mb-5  h-auto md:h-72 w-screen border-none grid grid-flow-col grid-cols-3 gap-5'>
    <div className='col-span-2  w-full  '>
    <video  className=' h-auto md:h-64 object-cover w-full border rounded-2xl border-none shadow-md shadow-slate-600 col-span-2 p-0 ' type="video/mp4" playsInline loop autoPlay muted controls  src="video/sample-vid.mp4"  /> 
    </div>
    <div className='border-none  md:h-72 mt-auto mb-auto '>
     <img className="border-none shadow-md shadow-slate-600  md:h-64 object-contain rounded-2xl " src="img/titanium.jpg" alt="advertisement"/>
     <button className=' scale-50 w-28  md:scale-100 text-lg bg-slate-900 text-white hover:bg-slate-500 border rounded-full p-1 mt-2' >Learn more</button>
    </div>
    </div>
    </>
  )
}

export default Hero
