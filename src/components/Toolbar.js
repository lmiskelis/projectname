
import { useNavigate } from "react-router-dom"


function Toolbar({x}){
    const nav=useNavigate()
    
function GoShop(){
    nav("/shop")
}
function GoMain(){
    nav("/mainmenu")
}
function GoArena(){
    nav("/arena")
}
   
  
    return (
       <div  className="Toolbar" >
     <h1 onClick={GoShop}>Shop</h1>
     <h1 onClick={GoMain}>Main Menu</h1>
     <h1 onClick={GoArena}>Arena</h1>

        
</div>
    )
}

export default Toolbar