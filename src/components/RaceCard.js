import { useContext } from "react"
import mainContext from "../context/MainContext"
import { useNavigate } from "react-router-dom"

function RaceCard({x}){
    const nav=useNavigate()
let {setrace,}=useContext(mainContext)
   function Select(){
setrace(x)
nav("/mainmenu")

   }
  
    return (
       <div onClick={Select} className="race" >
      <img src={x.image} alt="" />
      <h1>{x.race}</h1>
      <h2>damage:{x.damage}</h2>
      <h2>gold:{x.gold}</h2>

        
</div>
    )
}

export default RaceCard