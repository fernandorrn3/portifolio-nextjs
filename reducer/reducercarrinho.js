import { createSlice } from "@reduxjs/toolkit";

const initialState = []
    



const carrinhoReducer = createSlice({
    name:'carrinho',
    initialState,
   

    reducers:{
        addcart(state,action){
         
            console.log(action.payload)
            const produtos = {
                nome:action.payload.nome,
                valor:action.payload.valor,
                quantidade:action.payload.quantidade,
                adicionado:action.payload.adicionado
            }

           
                
                return[
                   ...state,
                   produtos
                ]
            
              
            
        }
    }
})
export const {addcart} = carrinhoReducer.actions
export default carrinhoReducer.reducer