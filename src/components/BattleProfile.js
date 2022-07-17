import { useContext } from "react"
import mainContext from "../context/MainContext"
import Maininventory from "../components/MainInventory"
import { useState } from "react"
import { useEffect } from "react"
function BattleProfile({x,myhp}){
let {selectedweapon}=useContext(mainContext)
   
  
 
    return (
       <div  className="profile" >
     
   
  <img src={x.image} alt="" />
  <div className="wraper">
    <div className="healthbar" style={{width:`${myhp}%`}}>

    </div>

  </div>
  {x.gold &&<img className="mazas" src={selectedweapon.image} alt="" />}

</div>
    )
}

export default BattleProfile