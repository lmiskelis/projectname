import { useContext } from "react"
import mainContext from "../context/MainContext"

function Shopinventory({x,}){
   let {getinventory,setinventory,getrace,setrace}=useContext(mainContext)
function Buy(){
    if(getrace.gold>=x.price){
        getrace.gold=getrace.gold-x.price
       setinventory([...getinventory,x]) 
    }


}
   
  
    return (
       <div onClick={Buy} className="items" >
        
      <img src={x.image} alt="" />
      {x.maxDamage&&<h2>max damage:{x.maxDamage}</h2>}
      {x.title&&<h2>{x.title}</h2>}
      
      <h2>Price:{x.price}</h2>
      

        
</div>
    )
}

export default Shopinventory