"use client"
import { useState } from "react";

interface Type{
    name:string,
    fun:()=>void,
};



export default function Button(Props:Type){
    
   return ( 

 <div className=""><button name={Props.name} className="border-4 bg-   border-solid hover:bg-green-500 py-2 px-2 my-4 mx-4">Click me!</button></div>
   );
}






