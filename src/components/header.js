import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { setlogedon } from "../features/users"


function Header(){
    let logedon=useSelector(state=>state.users.value.logedon)
    let conversations=useSelector(state=>state.users.value.conversations)
let pokalbiai=conversations.filter(x=>x.users.includes(logedon.username))
const nav=useNavigate()
let dispatch=useDispatch()
function Register(){
    nav("/register")
    dispatch(setlogedon({}))
}
function Login(){
    nav("/")
}
function Profile(){
    nav("/profile")
}
function Allusers(){
    nav("/allusers")
}
function Conversations(){
    nav("/conversations")
}

    return (
       <div  className="App" >
        {!logedon.username &&<div className="Header">
  <div onClick={Register}>Register</div>
   <div onClick={Login}>Login</div>
</div>}
   {logedon.username &&<div className="Header">
  <div onClick={Profile}>Profile</div>
  <div onClick={Allusers}>Allusers</div>
  <div onClick={Conversations}>Conversations({pokalbiai.length})</div>
   <div onClick={Register}>Logout</div>
</div>}
</div>
    )
}

export default Header