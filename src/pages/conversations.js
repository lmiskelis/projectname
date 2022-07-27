import {  useSelector } from "react-redux/es/exports"
import ConversationCard from "../components/conversationcard"
function Conversations(){

 
 let logedon=useSelector(state=>state.users.value.logedon)
 let conversations=useSelector(state=>state.users.value.conversations)
 let filter=conversations.filter(x=>x.users.includes(logedon.username))
 console.log(filter[0])
    return (
       <div  className="form" >
   {filter.map((x,i)=><ConversationCard key={i} talk={x}/>)}
  

</div>
    )
}

export default Conversations