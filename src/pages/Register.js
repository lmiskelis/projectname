import { useState } from "react"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { useNavigate } from "react-router-dom"
import { addUser } from "../features/users"

function Register(){
    let nav=useNavigate()
    const[geterror,seterror]=useState()
    let users=useSelector(state=>state.users.value.users)
let usernameValue=useRef()
let password1Value=useRef()
let password2Value=useRef()
let dispatch =useDispatch()
function checkUppercase(str){
    for (let i=0; i<str.length; i++){
      if (str.charAt(i) === str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)){
        return false;
      }
    }
    return true;
}
function containsSpecialChars(str) {
  const specialChars = /[!@#$%^&*_+]/;
  return !specialChars.test(str);
}



 function submit(){
    if (usernameValue.current.value.length<4 || usernameValue.current.value.length>20 ){
seterror("Username must be between 4-20 charachter long")
return
    }
    if(password1Value.current.value.length<4 || password1Value.current.value.length>20 ||checkUppercase(password1Value.current.value) ||containsSpecialChars(password1Value.current.value)  ){
        seterror("Password must have a uppercase charcter,and a special charachter(!@#$%^&*_+) and be 4-20 charchters long")
        return
    }
    if(password1Value.current.value!==password2Value.current.value){
        seterror("Passwords must match")
        return
    }
    let naujas={
        username:usernameValue.current.value,
        password:password1Value.current.value,
        image:"https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg",
        
        id:Date.now()
    }
    if(users.find(x=>x.username===usernameValue.current.value)){
        seterror("username taken. pick another")
        return
    }
    
dispatch(addUser(naujas))
    seterror("")
    nav("/")
    
 }
    return (
       <div  className="form" >
   
  <input type="text" placeholder="username" ref={usernameValue} />
  <input type="text" placeholder="password" ref={password1Value} />
  <input type="text" placeholder="password" ref={password2Value} />

  <p>{geterror}</p>
  <button onClick={submit}>Register</button>

</div>
    )
}

export default Register