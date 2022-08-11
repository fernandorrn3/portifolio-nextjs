import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    produtos: [],
    status: 'idle',
    error: null

}

//buscar o produto atualizar e despachar para o reducer

export function upActionProduto(dados) {
    return async function midwareUpProd(dispatch, getState) {
        const fetchProduto = getState()

        const produtosStore = fetchProduto.reducerProdutos.produtos
        console.log(produtosStore)
        const procuraProdutos = produtosStore.find(el => el.id == dados.id)

        
      
        dispatch(upQuantidade(procuraProdutos))

    }
}



export const fetchProdutos = createAsyncThunk('produtos/fetchProdutos', async () => {

    const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'addproduto/user')
    const response = await res.json()

    return response

})


export const inserirProdutos = createAsyncThunk(
    'produtos/inserirProdutos',

    async postInicial => {
        console.log(postInicial)
        const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'addproduto/' + postInicial.user, {
            body: JSON.stringify(postInicial),

            headers: {
                'Content-Type': 'application/json'
            },

            method: 'POST'
        })
        const response = await res.json()
        return response

    }

)


const produtoReducer = createSlice({
    name: 'produtos',
    initialState,

    reducers: {

        upQuantidade(state, action) {


           
            const fetchProduto = state.produtos.find(el => el.id === action.payload.id)
            
            const flow = parseInt(fetchProduto.quantity)

            fetchProduto.quantity = flow
            
           
            if (fetchProduto) {
                
                fetchProduto.quantity = parseInt(fetchProduto.quantity + 1) 
            }


        }
    },

    extraReducers(builder) {
        builder



            .addCase(inserirProdutos.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.produtos.push(action.payload)
            })

            .addCase(fetchProdutos.pending, (state, action) => {
                state.status = 'loading'
            })

            .addCase(fetchProdutos.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.produtos = state.produtos.concat(action.payload)

            })

            .addCase(fetchProdutos.rejected, (state, action) => {
                state.status = 'failed',
                    state.error = action.error.message
            })
    }
})




export const { upQuantidade } = produtoReducer.actions
export default produtoReducer.reducer