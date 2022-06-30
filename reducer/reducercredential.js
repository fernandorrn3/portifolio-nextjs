import { createSlice } from "@reduxjs/toolkit";

const initialState = []


const credential = createSlice({
    name:'guardartoken',
    initialState,

    reducers:{
addcredencial(state,action){
    console.log(action.payload)
const token = {
    tokenclient:action.payload.acesstoken,
    acesstoken:action.payload.tokenclient
}

return[
    ...state,
    token
]
}
    }
})

export const  {addcredencial} = credential.actions
export default credential.reducer
