import { useContext } from "react"
import RaceCard from "../components/RaceCard"

import mainContext from "../context/MainContext"
function Selection({}){
let {characters}=useContext(mainContext)
console.log(characters)
   
  
    return (
       <div  className="App" >
      
{characters.map((x,i)=><RaceCard x={x} key={i} />)}
        
</div>
    )
}

export default Selection