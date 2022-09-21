import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

initialState = {
    endereco: []
}

const enderecoRedux = createSlice({
    name: 'endereco',
    initialState,

    salvarEndereco(state,action){

    }
})

export const {salvarEndereco} = enderecoRedux.actions
export default enderecoRedux.reducer