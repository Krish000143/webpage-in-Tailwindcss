import React from "react";

function footer(){
    return(
        <>
        
  <footer className=' text-orange-600 mt-28'>
      <div className='container mx-auto py-28 px-5 '>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-7'>
          <div>
            <a href='#'>
              <img src='src\assets\logo-2-removebg-preview.png'></img>
            </a>
          </div>
          <div className=''>
            <h5 className='text-orange-600 font-semibold text-lg'>Reasources</h5>
            <ul className='list-none mt-4 space-y-3'>
              <li>
              <a href='#home'
              className='text-orange-600 hover:text-black font-medium transition-all duration-300 ease-in-out'>
                Home                
              </a>
              </li>
              <li>
              <a href='#about'
              className='text-orange-600 hover:text-black font-medium transition-all duration-300 ease-in-out'>
                About                
              </a>
              </li>
              <li>
              <a href='#contactus'
              className='text-orange-600 hover:text-black font-medium transition-all duration-300 ease-in-out'>
                Contact Us               
              </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className='text-orange-600 font-semibold text-lg'>Follow Us</h5>
            <ul className='list-none mt-4 space-y-3'>
              <li>
              <a href='#'
              className='text-orange-600 hover:text-black font-medium transition-all duration-300 ease-in-out'>
                Github                
              </a>
              </li>
              <li>
              <a href='#'
              className='text-orange-600 hover:text-black font-medium transition-all duration-300 ease-in-out'>
                Discord                
              </a>
              </li>
              
            </ul>
          </div>
          <div>
            <h5 className='text-orange-600 font-semibold text-lg'>Important Links</h5>
            <ul className='list-none mt-4 space-y-3'>
              <li>
              <a href='#'
              className='text-orange-600 hover:text-black font-medium transition-all duration-300 ease-in-out'>
                Privacy Policy                
              </a>
              </li>
              <li>
              <a href='#'
              className='text-orange-600 hover:text-black  font-medium transition-all duration-300 ease-in-out'>
                Term & Condition                
              </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className='border-t border-slate-700 '>
        <div className='flex flex-row justify-between mx-auto py-4 md:text-left text-center px-5'>
          <p className='mb-0 font-semibold '> 
            &copy;
            copyright krishramjiyani
            
          </p>
          <ul className='inline-flex gap-5 p-2'>
            <li><a href='#'><i class="ri-facebook-fill" /></a></li>
            <li><a href='#'><i class="ri-instagram-fill" /></a></li>
            <li><a href='#'><i class="ri-linkedin-box-fill" /></a></li>
          </ul>
        </div>
        
      </div>
  </footer>
        
        </>
    )
}

export default footer
