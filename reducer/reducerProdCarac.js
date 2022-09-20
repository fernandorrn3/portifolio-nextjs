import { createSlice } from "@reduxjs/toolkit";

const initialState = {}
const caracterReducer = createSlice({
    name: 'caracter',
    initialState,
    reducers: {
        addCaracter(state, action) {
            return {
                ...state,
                data: action.payload
            }
        },

        deleteCaracter(state, action) {
            const data = { ...state }
            delete data.data
            return {
                data
            }

        }
    }
})

export const { addCaracter,deleteCaracter } = caracterReducer.actions
export default caracterReducer.reducer