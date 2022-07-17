import { useContext } from "react"
import mainContext from "../context/MainContext"

function Maininventory({x}){
   let {setselectedweapon,myhealthpoints,setmyhealthpoints,getinventory,setinventory}=useContext(mainContext)
function select(){
    if(x.maxDamage){
        setselectedweapon(x)

}
if(x.effect.health){
    let hp =myhealthpoints +x.effect.health
    console.log("hi")
    setmyhealthpoints(hp)
    let naujas=getinventory.indexOf(x)
  console.log(naujas)
  let nau=getinventory.filter((x,i)=>i!=naujas)
  console.log(nau)
  
       setinventory([...nau]) 

}
    }

   
  
    return (
       <div onClick={select} className="items" >

      <img src={x.image} alt="" />
      {x.maxDamage&&<h2>max damage:{x.maxDamage}</h2>}
      {x.title&&<h2>{x.title}</h2>}
      
      {Object.keys(x).length>2 ?<h2>Price:{x.price/2}</h2> :<h2>Price:{x.price}</h2>}
      

        
</div>
    )
}

export default Maininventory