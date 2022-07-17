import { useContext } from "react"
import mainContext from "../context/MainContext"

import { useState } from "react"
import BattleProfile from "../components/BattleProfile"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Maininventory from "../components/MainInventory"

function Arena({}){
  const nav=useNavigate()
let {getrace,monsters,selectedweapon,setinventory,setselectedweapon,dropItems,getinventory,myhealthpoints,setmyhealthpoints,enemyhealthpoints,setenemyhealthpoints,setrace}=useContext(mainContext)
   const[selectedmonster,setselectedmonster]=useState(0)

  
  const[myhp,setmyhp]=useState(100)
  const[enemyhp,setenemyhp]=useState(100)
  const [openiventory,setopeninventory]=useState(false)
 
 if(selectedmonster===0){
  Loadenemy()
  }
  useEffect(()=>{
setmyhealthpoints(getrace.health)
setenemyhealthpoints(selectedmonster.health)

  },[])
   function Loadenemy(){
    let dydis= monsters.length
    let number=Math.floor(Math.random()*dydis)
   setselectedmonster(monsters[number]) 
   setenemyhealthpoints(selectedmonster.health)
   setenemyhp(100)
   }
  function Battle(){
    
    
    let myMaxdmg=selectedweapon.maxDamage + getrace.damage
   
    let monsterDamage= Math.floor(Math.random() *selectedmonster.maxDamage) 
    let mydmg=Math.floor(Math.random() *myMaxdmg) 
setmyhealthpoints(myhealthpoints-monsterDamage)

setenemyhealthpoints(enemyhealthpoints-mydmg)
if(myhealthpoints<=0 ){
  setinventory([])
  setselectedweapon({})
  setrace({})
  nav("/")
}
if(enemyhealthpoints<=0){
Loadenemy()
let dydis= dropItems.length
    let number=Math.floor(Math.random()*dydis)
   
   
setinventory([...getinventory,dropItems[number]])

}
setmyhp(myhealthpoints*100/getrace.health)
setenemyhp(enemyhealthpoints*100/selectedmonster.health)
console.log(myhealthpoints)


  }function openinv(){
    setopeninventory(!openiventory)
  }
 
    return (
      <div>
       <div  className="arena" >
     <div className="trips">
     <BattleProfile x={getrace} myhp={myhp}/></div>
     <div className="trips">
      <button onClick={Battle} className="battle">Battle</button>
      <button className="invbutton" onClick={openinv}>Inventory</button>
     </div>
     <div className="trips">
      <BattleProfile myhp={enemyhp} x={selectedmonster}/>
     </div>
   
  
</div>
{openiventory &&<div id="myModal" class="modal">

  
  <div class="modal-content">
    <span class="close" onClick={openinv}>&times;</span>
    {getinventory.map((x,i)=><Maininventory  key={i} x={x}/>)}
  </div>

</div>}

</div>
    )
}

export default Arena