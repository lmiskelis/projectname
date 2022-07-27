import { useParams } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux/es/exports"
import { useRef } from "react"
import { setconverations } from "../features/users"


function SingleUser(){
    let messageValue=useRef()
    let dispatch=useDispatch()
    let users=useSelector(state=>state.users.value.users)
    let logedon=useSelector(state=>state.users.value.logedon)
    let conversations=useSelector(state=>state.users.value.conversations)
    let {id}=useParams()
     let user=users.filter(x=>x.id===Number(id))
     
     let tempconversations=[...conversations]
     function Send(){
        
        let check1=tempconversations.filter(x=>x.users.includes(user[0].username))
        let check2=check1.filter(x=>x.users.includes(logedon.username))
        if(check2.length===0){
        let comment={
            users:[user[0].username,logedon.username],
            comments:[{author:logedon.username,
            message:messageValue.current.value}]
        }
            tempconversations=[...conversations,comment]
           
dispatch(setconverations(tempconversations))
}
else{
     let comment ={author:logedon.username,
            message:messageValue.current.value}
    let convplace=0
     conversations.map((x,i)=>(x.users.includes(user[0].username) && x.users.includes(logedon.username))?convplace+=i:convplace+=0)
    let tempcoments=[...tempconversations[convplace].comments]
    tempcoments=[...tempcoments,comment]
    let tempconversationscomments={...tempconversations[convplace]}
    tempconversationscomments.comments=[...tempcoments]
     
     tempconversations[convplace]={...tempconversationscomments}
     dispatch(setconverations(tempconversations))
}
        }
       
    return (
       <div  className="Big" >
        <div className="Bigcard">
        <img src={user[0].image} alt="" />
        <h1>{user[0].username}</h1>
</div>

   <div className="form">
    <input type="text" placeholder="Say hi" ref={messageValue} />
    <button onClick={Send}>Send message</button>
   </div>
  

</div>
    )
}

export default SingleUser