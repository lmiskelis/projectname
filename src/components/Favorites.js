import { useEffect } from 'react';
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import FavoriteCards from './FavoriteCards';

function Favorites({favorites,setfavorites}){
    const [getAnimation,setAnimation]=useState(0)
    const [getHorror,setHorror]=useState(0)
    const [getDrama,setDrama]=useState(0)
    const [getAction,setAction]=useState(0)
     useEffect(()=>{
    let animaciniai= favorites.filter(x=>x.genre.includes("Animaciniai"))
    setAnimation(animaciniai.length)
    let horror= favorites.filter(x=>x.genre.includes("Siaubo"))
    setHorror(horror.length)
    let drama= favorites.filter(x=>x.genre.includes("Dramos"))
    setDrama(drama.length)
    let action= favorites.filter(x=>x.genre.includes("Veiksmo"))
    setAction(action.length)
     
     

 },[favorites])


  
  
    return (
       <div className="favorites">
        <div className='genres'>
            <p>Animation:{getAnimation}</p>
            <p>Action:{getAction}</p>
            <p>Horror:{getHorror}</p>
            <p>Drama:{getDrama}</p>
        </div>
        <div className='board'>
        {favorites.map((x,i)=><FavoriteCards key={i} favorites={favorites} setfavorites={setfavorites} object={x}/>)}
       </div> </div>
    )
}

export default Favorites