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
                title:action.payload.nome,
                unit_price:parseInt(action.payload.valor),
                quantity: parseInt(action.payload.quantidade ),
                
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