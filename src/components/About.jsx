import React from "react";

function about(){
    return(
        <>
           <div className='max-w-[100vw] md:px-[80px] py-40 flex mx-auto md:flex-row flex-col' id="about">
      <div className='basis-[45%]'>
        <img className='w-full h-full' src="https://img.freepik.com/free-vector/brainstorming-concept-landing-page_23-2148303748.jpg?t=st=1720937521~exp=1720941121~hmac=13516262fb51e989c8d4974e1195fbb5d3741bdcfa54d3447829afb15217dcfe&w=1060" alt="" />
      </div>  
      <div className='basis-[55%] mx-auto text-center flex pl-4 ml-3'>
        <div>
          <h1 className='text-3xl font-bold pb-5 text-orange-600 mt-10 text-left'>About us</h1>
          <p className='text-lg text-orange-600 font-medium text-left'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum culpa animi maxime 
            sint eos nulla ullam illum incidunt, officia quo rerum consectetur earum, officiis
            sapiente natus facere! Natus, nemo officia?</p>
         </div>
      </div>
    </div>
        </>
    )
}
export default about
