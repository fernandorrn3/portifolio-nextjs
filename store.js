import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import menuReducer  from "./reducer/reducermenu";
import reducercarrinho from "./reducer/reducercarrinho";
import reducercredential from "./reducer/reducercredential";
import reduceridorder from "./reducer/reduceridorder";
import reducerProdutos from "./reducer/reducerProdutos";

const combinedReducer =  combineReducers({
  menuReducer,
  reducercarrinho,
  reducercredential,
  reduceridorder,
  reducerProdutos
})


export  const makeStore =  () => 
configureStore({reducer:combinedReducer})

export const wrapper = createWrapper(makeStore)