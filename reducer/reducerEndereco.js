import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    endereco: [],
    status: 'iddle',
    error: null 
}

export const inserirEndereco = createAsyncThunk('endereco/inserirEndereco', async data => {
    const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'cadastrarUsuario/' + data.usuario, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const status = res.status
    const response = await res.json()
    
   
    return response
})

export const pegarEndereco = createAsyncThunk('endereco/pegarEndereco',async data => {
   
const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'cadastrarUsuario/' + data)
console.log(res.status)
try {
    if(res.status == 404) throw new Error('cadestre um endereco')
    if(res.status == 200) return res.json()
} catch (Error) {
    return  Promise.reject(Error)
}


})

const enderecoRedux = createSlice({
    name: 'endereco',
    initialState,

    salvarEndereco(state, action) {

    },

    extraReducers(builder) {
        builder
            .addCase(inserirEndereco.fulfilled, (state, action) => {
                state.status = 'succeeded'            
                state.endereco.push(action.payload)  
            })

            .addCase(pegarEndereco.fulfilled,(state,action)=>{
                state.status = 'succeeded'
           
                state.endereco.push(action.payload[0])
            })

            .addCase(pegarEndereco.rejected,(state,action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })

          
    }
})

export const { salvarEndereco } = enderecoRedux.actions
export default enderecoRedux.reducer