import { Rating } from 'react-simple-star-rating';
function Modal({object,setmodal,getfavorites,setfavorites}){
   function AddFavorite(){
   
setfavorites([...getfavorites,object])

   }
  function closemodal(){
     setmodal(false)
  }
  
    return (
       <div className="modal">
        <div className='modal-content'>
            <span onClick={closemodal} className="close">&times;</span>
            <div className='modalCard'>

        <img src={object.image} alt="" />
        <div className='text'>
        <p>{object.titleEng}</p>
        <p>Genre:{object.genre.map((x,i)=><span key={i}> {x}</span>)}</p>
         <Rating readonly={true} ratingValue={object.imdbRating*10} />
        <p>duration: {object.duration}</p>
        <p>{object.description}</p>



        <button onClick={AddFavorite}>Add to favorites</button>
        </div>
        </div>
</div>
       </div> 
    )
}

export default Modal