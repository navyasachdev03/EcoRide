import React from "react";
import Navbar from "./Navbar";

function MyRides(){
    return(
        <div className="flex flex-col text-center">
            <div><Navbar/></div>
            <div className="bg-white h-10"></div>
            <div className="flex flex-col text-center">
                <img src="mr.jpg" alt="img" className="h-60 w-60 mt-5 mx-auto"/>
                <h1 className="text-4xl text-slate-700 font-bold mt-5">Your future travel plans will appear here!</h1>
            </div>
        </div>
    )
}

export default MyRides;