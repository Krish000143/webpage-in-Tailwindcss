import React from "react"

import { MdChevronLeft, MdChevronRight  } from "react-icons/md";

function feature(){
    
    const slideLeft=()=>{
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 300;
      }
  
      const slideRight=()=>{
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 300;
      }
    return(
         <>
         
         
         <div className='max-w-[100wh] mx-auto py-6' id="products">
    <h1 className='text-orange-600 font-bold text-center text-2xl'>Feature Product</h1>
    </div>
    
    <div className='relative flex items-center'>

    <MdChevronLeft className='cursor-pointer' onClick={slideLeft} size={50} />
    <div id='slider' className='w-full h-full py-3 overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
    
    <div className='flex max-w-[1320px] mx-auto mt-10 gap-6 px-[20px]'>
      
      <div>
       
        <div className='overflow-hidden'>
       
        <img className='h-90 w-96 rounded-lg hover:scale-110 duration-500' src='https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'>
        </img>
        </div>
        <h3 className='text-orange-600 text-xl font-medium mt-4'>Boat Nirvanaa 751 ANC</h3>
        <p className='text-orange-600 text-md mt-3 font-bold'>₹2999</p>
        <button className='py-3 px-20 mt-6 bg-transparent text-orange-700 border-orange-600 border-2  font-semibold rounded-full hover:bg-orange-700 hover:text-white hover:scale-105 duration-300' type='submit' name='submit'>Add to Cart</button>

      </div>
      <div>
       
        <div className='overflow-hidden'>
       
        <img className='h-90 w-96 rounded-lg hover:scale-110 duration-500' src='https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'>
        </img>
        </div>
        <h3 className='text-orange-600 text-xl font-medium mt-4'>Boat Nirvanaa 751 ANC</h3>
        <p className='text-orange-600 text-md mt-3 font-bold'>₹2999</p>
        <button className='py-3 px-20 mt-6 bg-transparent text-orange-700 border-orange-600 border-2  font-semibold rounded-full hover:bg-orange-700 hover:text-white hover:scale-105 duration-300' type='submit' name='submit'>Add to Cart</button>

      </div>
      <div>
       
        <div className='overflow-hidden'>
       
        <img className='h-90 w-96 rounded-lg hover:scale-110 duration-500' src='https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'>
        </img>
        </div>
        <h3 className='text-orange-600 text-xl font-medium mt-4'>Boat Nirvanaa 751 ANC</h3>
        <p className='text-orange-600 text-md mt-3 font-bold'>₹2999</p>
        <button className='py-3 px-20 mt-6 bg-transparent text-orange-700 border-orange-600 border-2  font-semibold rounded-full hover:bg-orange-700 hover:text-white hover:scale-105 duration-300' type='submit' name='submit'>Add to Cart</button>

      </div>
      
      
      <div>
        <div className='overflow-hidden'>
        <img className='h-90 w-96 rounded-lg hover:scale-110 duration-500' src='https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'>
        </img>
        </div>
        <h3 className='text-orange-600 text-xl font-medium mt-4'>Boat Nirvanaa 751 ANC</h3>
        <p className='text-orange-600 text-md mt-3 font-bold'>₹2999</p>
        <button className='py-3 px-20 mt-6 bg-transparent text-orange-700 border-orange-600 border-2  font-semibold rounded-full hover:bg-orange-700 hover:text-white hover:scale-105 duration-300' type='submit' name='submit'>Add to Cart</button>

      </div>
      <div>
        <div className='overflow-hidden'>
        <img className='h-90 w-96 rounded-lg hover:scale-110 duration-500 ' src='https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'>
        </img>
        </div>
        <h3 className='text-orange-600 text-xl font-medium mt-4'>Boat Nirvanaa 751 ANC</h3>
        <p className='text-orange-600 text-md mt-3 font-bold'>₹2999</p>
        <button className='py-3 px-20 mt-6 bg-transparent text-orange-700 border-orange-600 border-2  font-semibold rounded-full hover:bg-orange-700 hover:text-white hover:scale-105 duration-300' type='submit' name='submit'>Add to Cart</button>

      </div>
      <div>
        <div className='overflow-hidden'>
        <img className='h-90 w-96 rounded-lg hover:scale-110 duration-500' src='https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'>
        </img>
        </div>
        <h3 className='text-orange-600 text-xl font-medium mt-4'>Boat Nirvanaa 751 ANC</h3>
        <p className='text-orange-600 text-md mt-3 font-bold'>₹2999</p>
        <button className='py-3 px-20 mt-6 bg-transparent text-orange-700 border-orange-600 border-2  font-semibold rounded-full hover:bg-orange-700 hover:text-white hover:scale-105 duration-300' type='submit' name='submit'>Add to Cart</button>

      </div>
    </div>
    </div>
    <MdChevronRight className='cursor-pointer' onClick={slideRight} size={50} />
    </div>
  
           
          </>

    )
}
export default feature