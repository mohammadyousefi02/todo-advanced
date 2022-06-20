import {createSlice} from '@reduxjs/toolkit';

const paginationSlice = createSlice({
    name:"pagination",
    initialState:{
        row:5,
        page:1,
        totalPage:1,
    },
    reducers:{
        changeRow:(state,action)=>{
            state.row = action.payload
        },
        nextPage:(state)=>{
            if(state.page + 1 > state.totalPage) return state
            state.page = state.page + 1
        },
        prevPage:(state)=>{
            if(state.page - 1 === 0)return state
            state.page = state.page - 1
        },
        setTotalPage:(state,action)=>{
            state.totalPage = action.payload
        }
    }
})

export const {changeRow,nextPage,prevPage,setTotalPage} = paginationSlice.actions;

export default paginationSlice.reducer;