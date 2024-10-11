
import Image from "next/image";

interface Type{
  avater:string,
alt :string,
width:number,
height:number,
  };
export default function HomePicture(props:Type) {


    return (
  
  <div>
    <Image src={props.avater} alt={props.alt} width={props.width} height={props.height} className="my-5 border-4 "/>
    </div>
  

)};