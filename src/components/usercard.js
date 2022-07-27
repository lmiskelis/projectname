import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux/es/exports"
function Usercard({user}){
let nav=useNavigate()
let logedon=useSelector(state=>state.users.value.logedon)
function Go(){
    if(logedon.id!==user.id){
        nav(`/user/${user.id}`)
    }
    else{
        nav("/profile")
    }
}
    return (
       <div onClick={Go}  className="card" >

  <img src={user.image} alt="" />
  <h2>{user.username}</h2>

</div>
    )
}

export default Usercard