import { createSlice } from "@reduxjs/toolkit";

const initialState = {}




const detalhesReducer = createSlice({
  initialState,
  name: 'editor',

  reducers: {

    addDetalhes(state, action) {
      console.log(action.payload)
      return {
          ...state,
          data:action.payload
      }
    },

    deleteDetalhes(state, action) {
    const data =  {...state}
    delete data.data
    return{
      data
    }
   
    }


  }

})
export const { addDetalhes, deleteDetalhes } = detalhesReducer.actions
export default detalhesReducer.reducer

