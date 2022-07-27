
import { useSelector} from "react-redux/es/exports"
import Usercard from "../components/usercard"
function Allusers(){
let users=useSelector(state=>state.users.value.users)
    return (
       <div  className="allusers" >
   {users.map((x,i)=><Usercard key={i} user={x}/>)}
  

</div>
    )
}

export default Allusers