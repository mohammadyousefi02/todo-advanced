import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name:"todo",
    initialState:{
        task:"",
        priority:"low",
        status:"todo",
        deadline: "",
        detail: "",
        id: ""
    },
    reducers:{
        changeTodo:(state,action)=>{
            state.task = action.payload.task;
            state.priority = action.payload.priority;
            state.status = action.payload.status;
            state.deadline = action.payload.deadline;
            state.detail = action.payload.detail;
        },
        resetTodo:(state)=>{
            state.task = "";
            state.priority = "low";
            state.status = "todo";
            state.deadline = "";
            state.detail = "";
        }
        
    }
})

export const {changeTodo,resetTodo} = todoSlice.actions;

export default todoSlice.reducer;

