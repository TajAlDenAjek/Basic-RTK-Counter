import { createSlice } from '@reduxjs/toolkit'
import {authActions} from './authSlice'


export type counterSliceStateType = {
    counter: number|any
}
const initState: counterSliceStateType = {
    counter: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initState,
    reducers: {
        increase: (state, action) => {
            state.counter+=action.payload.number
        },
        decrease: (state, action) => { 
            state.counter-=action.payload.number
        },
    },
    extraReducers:{
        [authActions.flip]:(state)=>{
            state.counter=0;
        }
    }
})

export const counterAction=counterSlice.actions;
export default counterSlice.reducer;