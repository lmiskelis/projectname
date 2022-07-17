import { useContext } from "react"
import mainContext from "../context/MainContext"
import Maininventory from "../components/MainInventory"
import { useState } from "react"
import Shopinventory from "../components/shopinventory"
import MainShopinventory from "../components/MainShopinventory"
function Shop({}){
    const [shoplocation,setshoplocation]=useState("weapon")
 let {getrace,getinventory,trader}=useContext(mainContext)
console.log(getrace)
   
  
    return (
       <div  className="Menu" >
     
        <div className="halfi">
<div className="select">
    <div onClick={()=>setshoplocation("weapon")}>Weapons</div>
    <div onClick={()=>setshoplocation("potion")}>Potions</div>
</div>
{shoplocation==="potion"&&trader.potions.map((x,i)=><Shopinventory x={x} state={shoplocation} key={i}/>)}
{shoplocation==="weapon"&&trader.weapons.map((x,i)=><Shopinventory x={x} state={shoplocation} key={i}/>)}

        </div>
        <div className="half">
<h1>Gold:{getrace.gold}</h1>
<div className="inventory">
    {getinventory.length===0 && <h1>None</h1>}
    {getinventory.map((x,i)=><MainShopinventory  key={i} x={x}/>)}
    
    </div>

        </div>
</div>
    )
}

export default Shop