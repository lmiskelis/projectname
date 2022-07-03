

import { useState,useRef,useEffect } from 'react';
import './App.css';
// import axios from 'axios';
import { Rating } from 'react-simple-star-rating';
import Cards from './components/Cards';
import movies from "./assets/movies.json"
import Modal from './components/Modal';
 import Favorites from './components/Favorites';

function App() {
    const [getfavorites,setfavorites]=useState([])
    const [getModal,setModal]=useState(false)
    const [getobject,setobject]=useState({})
    const[getshowFavorites,setshowFavorites]=useState(false)
let arr=movies.filter((x,i)=>i<100)

 function FavoritesOn(){
setshowFavorites(!getshowFavorites)
 }

  return (
    
  <div className='App'>
<button onClick={FavoritesOn}>{getshowFavorites ? "Main":"Favorites"}</button>
{!getshowFavorites &&<div className='board'>
{arr.map((x,i)=><Cards object={x} setmodal={setModal} setobject={setobject} key={i}/>)}
{getModal && <Modal setmodal={setModal} getfavorites={getfavorites} setfavorites={setfavorites} object={getobject} />}
</div>}
{getshowFavorites && <Favorites setfavorites={setfavorites} favorites={getfavorites}/>}
  </div>
   );
}

export default App;