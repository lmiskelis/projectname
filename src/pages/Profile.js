import { useState } from "react"
import { useRef } from "react"
import { useSelector,useDispatch } from "react-redux/es/exports"
import { setlogedon,setUsers } from "../features/users"
function Profile(){
    const [geterror,seterror]=useState()
let users=useSelector(state=>state.users.value.users)
let logedon=useSelector(state=>state.users.value.logedon)
let dispatch=useDispatch()
let imageValue=useRef()
let oldpasValue=useRef()
let newpas1Value=useRef()
let newpas2Value=useRef()
let tempusers=[...users]
let place=0
function checkUppercase(str){
    for (let i=0; i<str.length; i++){
      if (str.charAt(i) === str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)){
        return true;
      }
    }
    return false;
}
function containsSpecialChars(str) {
  const specialChars = /[!@#$%^&*_+]/;
  return specialChars.test(str);
}

users.map((x,i)=>x.id===logedon.id?place+=i:place+=0)
let temporary={...tempusers[place]}
function Changeimage(){
    temporary.image=imageValue.current.value
    dispatch(setlogedon(temporary))
    tempusers.splice(place,1,temporary)
    dispatch(setUsers(tempusers))
}

function Changepassword(){
    if(oldpasValue.current.value===temporary.password){
        if(newpas1Value.current.value===newpas2Value.current.value && containsSpecialChars(newpas1Value.current.value) && checkUppercase(newpas1Value.current.value)&&(newpas1Value.current.value.length<20 && newpas1Value.current.value.length>3)){
            temporary.password=newpas1Value.current.value
            dispatch(setlogedon(temporary))
            tempusers.splice(place,1,temporary)
            dispatch(setUsers(tempusers))
            console.log(tempusers)
            seterror()
        }
        else{
            seterror("new password dosent fit requirements")
        }
    }
else{seterror("Wrong old password")

}
}
    return (
       <div  className="form" >
        <h1>{logedon.username}</h1>
        <div className="profile">
        <div className="form gap">
            <img src={logedon.image} alt="" />
            <input type="text" placeholder="new  image url" ref={imageValue} />
        <   button onClick={Changeimage}>Change image</button>
 </div>
 <div className="form gap">
    <input type="text" placeholder="old password" ref={oldpasValue} />
    <input type="text" placeholder="new password" ref={newpas1Value} />
    <input type="text" placeholder="new password" ref={newpas2Value} />
    <p>{geterror}</p>
    <button onClick={Changepassword}>Change password</button>
 </div>
  </div>

</div>
    )
}

export default Profile