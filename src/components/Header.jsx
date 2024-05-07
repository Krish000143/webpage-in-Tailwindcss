import React from "react";

function header(){
return(
    <>
    <div className='bg-none w-full'>
      <div className='flex items-center justify-between container mx-auto py-2 px-5 '>
        <div className=''>
          <img className='h-20 w-50' src='src\assets\logo-2-removebg-preview.png'></img>
        </div>
        <div className=''>
        <ul className='md:flex md:items-center z-[-1] md:z-auto'>
          
        <a href='#home'><li className='md:my-0 mr-10 text-orange-600 hover:text-orange-900 font-bold text-lg cursor-pointer'>Home</li></a>
          <a href='#products'><li className='mr-10 text-orange-600 hover:text-orange-900 font-bold text-lg cursor-pointer'>Products</li></a>
          <a href='#about'><li className='mr-10 text-orange-600 hover:text-orange-900 font-bold text-lg cursor-pointer'>About Us</li></a>
          <a href='#contactus'><li className='mr-10 text-orange-600 hover:text-orange-900 font-bold text-lg cursor-pointer'>Contact Us</li></a>
        <button className='py-2 px-10 bg-transparent text-orange-700 border-orange-600 border-2  font-semibold rounded-full hover:bg-orange-700 hover:text-white hover:scale-105 duration-300 ' type='submit' name='submit'>Get Started</button>
        </ul>
        </div>
      </div>
    </div>
    </>
)

}
export default header