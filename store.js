import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import menuReducer  from "./reducer/reducermenu";
import reducercarrinho from "./reducer/reducercarrinho";
import reducercredential from "./reducer/reducercredential";
import reduceridorder from "./reducer/reduceridorder";
import reducerProdutos from "./reducer/reducerProdutos";
import reducerEditText from "./reducer/reducerEditText";

  export const combinedReducer =  combineReducers({
  menuReducer,
  reducercarrinho,
  reducercredential,
  reduceridorder,
  reducerProdutos,
  reducerEditText
})


//thunks e uma função que pode interagir com a loja e despachar açoes, ela tem acesso aaos dados armazenados na loja
//thunks serve para escrever logicas assincronas

export  const makeStore =  () => 
configureStore({reducer:combinedReducer})

export const wrapper = createWrapper(makeStore)