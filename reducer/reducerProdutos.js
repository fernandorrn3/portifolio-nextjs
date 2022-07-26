import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";

const initialState={
    produtos:[],
    status:'idle',
    error:null

}


export const fetchProdutos = createAsyncThunk('produtos/fetchProdutos', async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const response = await res.json()
  console.log(response)
  return response  

})

const produtoReducer = createSlice({
   name:'produtos',
   initialState,

   reducers:{
    loadProdutos(state,action){

    }
   },

   extraReducers(builder){
builder
.addCase(fetchProdutos.pending,(state,actions)=>{
    state.status = 'loading'
})

.addCase(fetchProdutos.fulfilled,(state,action)=>{
    state.status = 'succeeded'
    state.produtos = state.produtos.concat(action.payload)
})

.addCase(fetchProdutos.rejected,(state,action)=>{
    state.status = 'failed',
    state.error = action.error.message
})
   }
})





export const {loadProdutos} = produtoReducer.actions
export default produtoReducer.reducer