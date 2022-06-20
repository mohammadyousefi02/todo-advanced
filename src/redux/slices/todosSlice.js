import { createSlice } from '@reduxjs/toolkit';

import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"




const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        isEditing: false,
        editedTodoIndex: null,
        deletedTodoId: null,
        filteredTodos: [],
        filterValue: '',
        priorityFilterValue: 'all',
        statusFilterValue: 'all',
        deadLineFilter: 'all',
    },
    reducers:{
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        setDeletedTodoId: (state, action) => {
            state.deletedTodoId = action.payload;
        },  
        deleteTodo:(state)=>{
            state.todos = state.todos.filter(t=>t.id !== state.deletedTodoId);
        },
        editTodo:(state, action)=>{
            state.isEditing = true;
            state.editedTodoIndex = state.todos.findIndex(t=>t.id === action.payload);
        },
        updateTodos:(state, action)=>{
            state.todos[state.editedTodoIndex] = action.payload;
            state.isEditing = false;
            state.editedTodoIndex = null;
        },
        changeFilter:(state, action)=>{
          state.filterValue = action.payload
        },
        changePriorityFilter:(state, action)=>{
            state.priorityFilterValue = action.payload
        },
        changeStatusFilter:(state, action)=>{
            state.statusFilterValue = action.payload
        },
        changeDeadLineFilter:(state, action)=>{
            state.deadLineFilter = action.payload
        },
        filterTodosBySearch:(state)=>{
            if(state.filterValue === "" && state.priorityFilterValue === "all" && state.statusFilterValue === "all" && state.deadLineFilter === "all") {
                state.filteredTodos = state.todos
            }
            else {
                state.filteredTodos = []
                state.todos.forEach(t=>{
                    if(t?.task?.toLowerCase().includes(state.filterValue.toLowerCase()) && (state.priorityFilterValue === "all" || t?.priority === state.priorityFilterValue) && (state.statusFilterValue === "all" || t?.status === state.statusFilterValue)) {
                        const date = new DateObject({
                            date: t.deadline,
                            calendar: persian,
                            locale: persian_fa
                          })
                        const dateDay = date.toDays()
                        const today = new DateObject({
                              calendar: persian,
                              locale: persian_fa
                            }).toDays()
                        if(state.deadLineFilter === "all")state.filteredTodos.push(t)
                        else {
                            if(state.deadLineFilter === "overdue" &&  dateDay<today)state.filteredTodos.push(t)
                            else if(state.deadLineFilter === "for today" && dateDay === today)state.filteredTodos.push(t)
                            else if(state.deadLineFilter === "for the future" && dateDay > today)state.filteredTodos.push(t)
                        }
                    }
                })
            }
        },
    }
})

export const { addTodo,setDeletedTodoId,deleteTodo,editTodo,updateTodos,changeFilter,filterTodosBySearch,changePriorityFilter,changeStatusFilter,changeDeadLineFilter } = todosSlice.actions;

export default todosSlice.reducer;