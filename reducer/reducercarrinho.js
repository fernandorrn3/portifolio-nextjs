import { createSlice} from "@reduxjs/toolkit";

const initialState = []
    

    



const carrinhoReducer = createSlice({
    name:'carrinho',
    initialState,
   

    reducers:{
        addcart(state,action){
         
           
            const produtos = {
                nome:action.payload.nome,
                valor:action.payload.valor,
                quantidade: parseInt(action.payload.quantidade) ,
                adicionado:action.payload.adicionado,
                id:action.payload.id
            }

            
          
              
                return[
                   ...state,
                  
                   produtos
        ]      
            
        },
updateCart(state,action){
    const produto = state.find(el => el.id === action.payload.id)
  console.log(produto)
    if(produto){
        produto.quantidade = produto.quantidade + 1
    }


}
        
    }
})
export const {addcart,updateCart} = carrinhoReducer.actions
export default carrinhoReducer.reducer