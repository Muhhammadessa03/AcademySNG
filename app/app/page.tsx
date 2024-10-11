import Link from "next/link";



 
export default function Home() {
  return (

    
    <div className="flex justify-between text-gray-300 text-0xl border-4  bg-gray-900">
   
<div className="flex items-center mx-4"><img src="Profile.jpeg" className="w-10 h-10 rounded-full"/></div>

 <div className="flex items-center gap-6 mr-4"> 
 <Link className="hover:font-bold" href="/">Home </Link>
 <Link className="hover:font-bold" href="/">Result </Link>
 <Link className="hover:font-bold" href="/">About </Link>
 </div>

 

  </div>


     
 
 
   

    
  );
}