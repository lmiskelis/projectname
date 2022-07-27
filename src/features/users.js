import { createSlice } from "@reduxjs/toolkit";
export const userSlice=createSlice({
    name:"users",
    initialState:{
        value:{
            users:[{
        username:"Lukas",
        password:"karalius",
        image:"https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg",
        
        id:1
    },
{
        username:"Petras",
        password:"karalius",
        image:"https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg",
        
        id:2
    },{
        username:"Juozas",
        password:"karalius",
        image:"https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg",
        
        id:3
    }],
            logedon:{username:"Juozas",
        password:"karalius",
        image:"https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg",
        
        id:3},
        conversations:[]
        } 
    },
   
    reducers:{
        
        
        addUser:(state,action)=>{
            state.value.users.push(action.payload)
        },
        setUsers:(state,action)=>{
            state.value.users=action.payload
        },
        setlogedon:(state,action)=>{
            state.value.logedon=action.payload
        },
        setconverations:(state,action)=>{
            state.value.conversations=action.payload
        }
        
       

    }
})
export const {addUser,setUsers,setlogedon,setconverations}=userSlice.actions
export default userSlice.reducer







