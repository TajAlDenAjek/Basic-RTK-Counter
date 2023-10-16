import { createSlice } from '@reduxjs/toolkit'

export type authSliceStateType={
    login:boolean|any
}

const initState:authSliceStateType={
    login:false
}

const authSlice=createSlice({
    name:"auth",
    initialState:initState,
    reducers:{
        flip:(state)=>{
            state.login=!state.login;
        }
    }
})


export const authActions=authSlice.actions
export default authSlice.reducer