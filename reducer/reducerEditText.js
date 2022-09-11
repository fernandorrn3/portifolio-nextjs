import { createSlice} from "@reduxjs/toolkit";

const initialState = {}




const editorReducer = createSlice({
    initialState,
    name: 'editor',

  reducers:{
    addEditor(state,action){
    console.log(action.payload)
return {
    ...state,
    data:action.payload
}
    }
  }

})
export const  {addEditor} = editorReducer.actions
export default editorReducer.reducer

