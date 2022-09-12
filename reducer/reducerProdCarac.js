import { createSlice } from "@reduxjs/toolkit";

const initialState = {}
const caracterReducer = createSlice({
name:'caracter',
initialState,
reducers:{
    addCaracter(state,action){
return {
    ...state,
    data:action.payload
}
    }
}
})

export const {addCaracter} = caracterReducer.actions
export default caracterReducer.reducer