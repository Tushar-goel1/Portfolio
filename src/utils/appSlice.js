import {createSlice} from '@reduxjs/toolkit'
const appSlice=createSlice({
    name:'app',
    initialState:{
        OpenMenu:false,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.OpenMenu=!state.OpenMenu
        }
    }
});
export const {toggleMenu}=appSlice.actions
export default appSlice.reducer
