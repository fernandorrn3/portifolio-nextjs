import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    carrinho:[],
    total:[]
}
    

    



const carrinhoReducer = createSlice({
    name:'carrinho',
    initialState,
   

    reducers:{
        addcart(state,action){
        
           
            const produtos = {
                nome:action.payload.nome,
                valor:action.payload.valor,
                quantidade: parseInt(action.payload.quantidade ),
                adicionado:action.payload.adicionado,
                id:action.payload.id
            }

            
          
              
                
                state.carrinho.push(produtos)
                  
                   
                  
            
        },
updateCart(state,action){
    const produto = state.carrinho.find(el => el.id === action.payload.id)
 
    if(produto){
        produto.quantidade = produto.quantidade + 1
    }


},

addTotal(state,action){
state.total = action.payload

},

        
    }
})
export const {addcart,updateCart,addTotal} = carrinhoReducer.actions
export default carrinhoReducer.reducer