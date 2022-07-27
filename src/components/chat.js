import { useSelector } from "react-redux/es/exports"
function Chat({x}){
let logedon=useSelector(state=>state.users.value.logedon)
let who=false
console.log(x)
if(logedon.username===x.author){
    who=true
}
    return (
       <div  className="Bubble" >
        {who &&<p style={{textAlign:"right"}}>{x.message}:As</p>}
          {!who &&<p style={{textAlign:"left"}}>{x.author}:{x.message}</p>}
   
  

</div>
    )
}

export default Chat