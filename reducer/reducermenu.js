import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    estado:'false'
  }

const menuReducer = createSlice({
name:'abrir/fechar',    
initialState,
    reducers:{
abrirEfechar(state,action){
   

    return {
        ...state,

        estado:action.payload.valor
    }

},


    }
})


export const {abrirEfechar} = menuReducer.actions
export default menuReducer.reducer