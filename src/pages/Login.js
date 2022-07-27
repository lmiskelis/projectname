import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { setlogedon } from "../features/users"
import { useRef } from "react"
import { useState } from "react"
function Login(){
    const [geterror,seterror]=useState("")
    let nav=useNavigate()
    let dispatch =useDispatch()
let users=useSelector(state=>state.users.value.users)
let usernameValue=useRef()
let passwordValue=useRef()

function Logon(){
    let user=users.filter(x=>x.username===usernameValue.current.value)
    if(user.length<1){
        seterror("User does not exist")
        return
    }
    if(user[0].password!==passwordValue.current.value){
        console.log(user,user.password)
        seterror("Wrong Password")
        return
    }
    dispatch(setlogedon(user[0]))
    nav("/profile")
}
    return (
       <div  className="form" >
   <input type="text" placeholder="username" ref={usernameValue} />
   <input type="text" placeholder="password" ref={passwordValue} />
   <p>{geterror}</p>
   <button onClick={Logon}>Login</button>
  

</div>
    )
}

export default Login