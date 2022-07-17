 import { useContext } from "react"
import mainContext from "../context/MainContext"
function MainShopinventory({x}){
  let {getinventory,setinventory,getrace,setrace}=useContext(mainContext)
function sell(){
  if(Object.keys(x).length>2){
    getrace.gold=getrace.gold+x.price/2
  }
  else{
    getrace.gold=getrace.gold+x.price
  }
  let naujas=getinventory.indexOf(x)
  console.log(naujas)
  let nau=getinventory.filter((x,i)=>i!=naujas)
  console.log(nau)
  
       setinventory([...nau]) 
}
   
  
    return (
       <div onClick={sell} className="items" >

      <img src={x.image} alt="" />
      {x.maxDamage&&<h2>max damage:{x.maxDamage}</h2>}
      {x.title&&<h2>{x.title}</h2>}
      
      {Object.keys(x).length>2 ?<h2>Price:{x.price/2}</h2> :<h2>Price:{x.price}</h2>}
      

        
</div>
    )
}

export default MainShopinventory