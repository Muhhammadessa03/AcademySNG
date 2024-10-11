
 export default function id({params}:{params:{id:string}}){
    return(
    <div>
        Hello ! {params.id}
    </div>
    );
  }