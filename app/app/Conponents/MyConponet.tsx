"use client"
import { useState } from "react";
import AdminComponet from "./AdminConponet";
import UserConponet from "./UserConponet";
import Profile from "./Profile";
import HomePicture from "./Picture";
import Button from "./Button";
import Result from "./Result";


export default function MyComponet(){
   const [isAdmin,setlsAdmin]=useState(true);
   const handleButtonClick=()=>{ setlsAdmin(!isAdmin)};
   return ( 
    <div className="flex justify-center">
      
    

{isAdmin?(
<div><HomePicture avater="/Profile.jpeg" alt="Logo" width={200} height={200}/> </div>

):( <div> <HomePicture avater="/Profile2.png" alt="Logo" width={200} height={200}/> </div>
)};
  <Button name="Click me!" fun={handleButtonClick}/>


<Result/>




</div>
   )
}


