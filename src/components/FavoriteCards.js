import { Rating } from 'react-simple-star-rating';

function FavoriteCards({object,setfavorites,favorites}){

  
   function Delete(){
let naujas= favorites.filter(x=>x!=object)
setfavorites([...naujas])
   }
  
  
    return (
       <div  className="card">
        <img src={object.image} alt="" />
        <p>{object.titleEng}</p>
        <p>Genre:{object.genre.map((x,i)=><span key={i}> {x}</span>)}</p>
         <Rating readonly={true} ratingValue={object.imdbRating*10} />
        <p>duration: {object.duration}</p>
        <button onClick={Delete}>DELETE</button>

</div>
    )
}

export default FavoriteCards