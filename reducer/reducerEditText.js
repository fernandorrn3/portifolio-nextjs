import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    editor: [],
    status: 'iddle',
    error: null

}

export const editorProduto = createAsyncThunk('editor/produto', conteudo => {
return conteudo
})


const editorReducer = createSlice({
    initialState,
    name: 'editor',

    extraReducers(builder) {
        builder
            .addCase(editorProduto.fulfilled, (state, action) => {
                state.status = 'succeeded'
               state.editor.push(action.payload)
               

            })
    }

})

export default editorReducer.reducer

