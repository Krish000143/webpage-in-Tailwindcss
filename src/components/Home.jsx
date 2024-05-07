import React from "react";

function home(){
return(
    <>
     <div className='flex flex-row py-32 justify-between ' id="home">
         <div className='py-24 mt-20'>
            <h1 className='text-6xl sm::text-lg text-orange-600 font-bold font-serif leading-normal'>New Arrivals</h1>

            <button className='flex py-3 px-20 mt-6 bg-transparent text-orange-700 border-orange-600 border-2  font-semibold rounded-full hover:bg-orange-700 hover:text-white hover:scale-105 duration-300 ' type='submit' name='submit'> Shop Now </button>

         </div>
      <div className=''>
        <img className='md:h-full md:w-full md:max-w-full sm:none' src='src\assets\Beautiful_gaming_headphone_-5-removebg-preview.png'></img>
      </div>
    </div>
    </>
  )
}
export default home