import { useContext } from "react"
import mainContext from "../context/MainContext"
import Maininventory from "../components/MainInventory"
function Mainmenu({}){
 let {getrace,getinventory}=useContext(mainContext)
console.log(getinventory)
   
  
    return (
       <div  className="Menu" >
     
        <div className="half">
<div  className="race" >
      <img src={getrace.image} alt="" />
      <h1>{getrace.race}</h1>
      <h2>damage:{getrace.damage}</h2>
      <h2>gold:{getrace.gold}</h2>

        
</div>
        </div>
        <div className="half">
<h1>Inventory</h1>
<div className="inventory">
    {getinventory.length===0 && <h1>None</h1>}
    {getinventory.map((x,i)=><Maininventory key={i} x={x}/>)}
    </div>

        </div>
</div>
    )
}

export default Mainmenu