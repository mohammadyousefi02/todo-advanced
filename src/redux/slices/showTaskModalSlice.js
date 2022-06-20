import { createSlice } from "@reduxjs/toolkit"

const showTaskModalSlice = createSlice({
    name:"showTaskModal",
    initialState:false,
    reducers:{
        showTaskModal:(state)=>state = true,
        hideTaskModal:(state)=>state = false
    }
})

export const {showTaskModal, hideTaskModal} = showTaskModalSlice.actions;

export default showTaskModalSlice.reducer;