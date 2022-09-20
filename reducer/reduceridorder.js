import { createSlice } from "@reduxjs/toolkit";

const initialState = []


const idOrder = createSlice({
    initialState,
    name:'addorder',

    reducers:{
        addid(state,action){
            
            return [
                ...state,
                action.payload
            ]
        }
    }
})


export const {addid} = idOrder.actions 
export default idOrder.reducer
