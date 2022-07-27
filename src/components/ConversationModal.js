import { useRef } from "react"
import { useSelector,useDispatch } from "react-redux/es/exports"
import { setconverations } from "../features/users"
import Chat from "./chat"
function ConversationModal({setmodal,conversation}){
   console.log(conversation)
    let dispatch=useDispatch()

    let logedon=useSelector(state=>state.users.value.logedon)
    let conversations=useSelector(state=>state.users.value.conversations)
    let messageValue=useRef()



     let tempconversations=[...conversations]
 function close(){
    setmodal(false)
 }
 function Send(){
 
let comment ={author:logedon.username,
            message:messageValue.current.value}
    let convplace=0
     conversations.map((x,i)=>(x.users.includes(conversation.users[1]) && x.users.includes(conversation.users[0]))?convplace+=i:convplace+=0)
    let tempcoments=[...tempconversations[convplace].comments]
    tempcoments=[...tempcoments,comment]
    let tempconversationscomments={...tempconversations[convplace]}
    tempconversationscomments.comments=[...tempcoments]
     
     tempconversations[convplace]={...tempconversationscomments}
     dispatch(setconverations(tempconversations))

 }
    return (
       <div  className="chat" >
   <div id="myModal" className="modal">

  
  <div className="modal-content">
    <span className="close" onClick={close}>&times;</span>
    {conversation.comments.map((x,i)=><Chat x={x} key={i}/>)}
<div className="chat">
    
    <input type="text" placeholder=" message" ref={messageValue}/>
    <button  onClick={Send}>Send message</button></div>
  </div>

</div>
  

</div>
    )
}

export default ConversationModal