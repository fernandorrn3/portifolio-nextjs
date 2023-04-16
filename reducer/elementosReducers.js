import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';

const initialState = {
    elementos: [],
    allIds: []
}


const elementosReducer = createSlice({
    name: 'criadorElemento',
    initialState,
    reducers: {
        addContainer(state, action) {
            return {
                ...state,
                elementos: [
                    ...state.elementos,
                    action.payload
                ],
                allIds: [
                    ...state.allIds,
                    action.payload.id
                ]
            }
        },
        addItem(state, action) {

            const pegaContainer = state.elementos.find(el => el.id == action.payload.containerSelect)

            function adicionaContainer(data, patch, newValue) {
                return data.map((el) => {
                    if (el.id == patch) {
                        const novos = [...el.filhos, newValue]
                        return { ...el, filhos: novos }
                    }
                    else {
                        return { ...el, filhos: adicionaContainer(el.filhos, patch, newValue) }
                    }
                })
            }
            const seleciona = action.payload.paiSelect ? action.payload.paiSelect : action.payload.containerSelect          
            const valores = adicionaContainer(state.elementos, seleciona, action.payload)
     
               return {
                   ...state,
                   elementos: [
                       ...state.elementos.map((el) => {
                           if (el.id == action.payload.containerSelect) {
                               return valores[0]
                           } else {
                               return el
                           }
                       })
                   ]
   
               }


        }


    }

})

export const { addContainer, addItem } = elementosReducer.actions
export default elementosReducer.reducer


/*return Object.assign({}, el, {
    classes: addBordaRow
  })*/