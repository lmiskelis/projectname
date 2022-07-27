import { useState } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import ConversationModal from "./ConversationModal"
import { setconverations } from "../features/users"
function ConversationCard({talk}){
    let dispatch=useDispatch()
const [getmodal,setmodal]=useState(false)
 let users=useSelector(state=>state.users.value.users)
 let conversations=useSelector(state=>state.users.value.conversations)
 let logedon=useSelector(state=>state.users.value.logedon)
 let partner=talk.users.filter(x=>x!==logedon.username)
let partnerFull=users.filter(x=>x.username===partner[0])
 let tempconversations=[...conversations]
 
function RemoveConversation(){

    let convplace=0
     conversations.map((x,i)=>(x.users.includes(partner[0]) && x.users.includes(logedon.username))?convplace+=i:convplace+=0)
     tempconversations.splice(convplace,1)
     
     dispatch(setconverations(tempconversations))

}
function openConversation(){
setmodal(true)
}

    return (
        <div className="App">
        {getmodal &&<ConversationModal conversation={talk} setmodal={setmodal}/>}  
       <div  className="Concard" >
   <h1 onClick={openConversation}>Conversation with {partner[0]}</h1>
   <img onClick={openConversation} src={partnerFull[0].image} alt="" />
   <button className="remove" onClick={RemoveConversation}>X</button>
</div>

</div>
    )
}

export default ConversationCard