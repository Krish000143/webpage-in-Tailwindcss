import React from "react";

function login(){
    return(
        <>
            <div className="max-w-full mx-auto max-h-full ">
               <div className="h-screen flex justify-center items-center">
                <div className="h-[600px] w-[1100px] rounded-2xl flex justify-center items-center shadow-2xl leading-normal">
                    <div className="basis-1/2 w-full h-full flex justify-center items-center">
                        <img src="https://www.pjdevelopers.in/images/about.png" alt="" />
                    </div>
                    <div className="basis-1/2 p-10 space-y-12 bg-indigo-600 w-full h-full justify-center items-center rounded-r-2xl">
                        
                            <h1 className="text-center text-4xl text-white font-bold mt-16">Login Here !!</h1>
                            <input type="text" className="p-3 pl-8 mx-auto w-full rounded-full focus:outline-none" placeholder="Email"></input>  
                            <input type="password" className="p-3 pl-8 mx-auto w-full rounded-full focus:outline-none" placeholder="Password"></input>
                            <button
                                type="submit"
                                className="md:w-32 lg:w-48 bg-white hover:bg-blue-dark text-indigo-600 font-bold py-3 rounded-full  hover:bg- transition ease-in-out duration-300" >
                                Submit
                            </button>
                            <h1 className="text-center text-xl text-white font-bold mt-16">Don't have account <a href="Register.jsx" className="text-xl underline"> register here</a></h1>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default login