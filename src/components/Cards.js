
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

function Cards({object,setmodal,setobject}){

   function openModal(){
    setmodal(true)
    setobject(object)
   }
  
  
    return (
       <div onClick={openModal} className="card">
        <img src={object.image} alt="" />
        <p>{object.titleEng}</p>
        <p>Genre:{object.genre.map((x,i)=><span key={i}> {x}</span>)}</p>
         <Rating readonly={true} ratingValue={object.imdbRating*10} />
        <p>duration: {object.duration}</p>

</div>
    )
}

export default Cards