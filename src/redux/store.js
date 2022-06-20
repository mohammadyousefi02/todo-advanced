import { configureStore } from "@reduxjs/toolkit";

import todosSlice from "./slices/todosSlice";
import showTaskModalSlice from "./slices/showTaskModalSlice";
import todoSlice from "./slices/todoSlice";
import showViewTaskModalSlice from "./slices/showViewTaskModalSlice";
import showFilterMenuSlice from "./slices/showFilterMenuSlice";
import paginationSlice from "./slices/paginationSlice";
import showDeleteModalSlice from "./slices/showDeleteModalSlice";

export default configureStore({
    reducer: {
        todos: todosSlice,
        showTaskModal:showTaskModalSlice,
        todo:todoSlice,
        showViewTaskModal:showViewTaskModalSlice,
        showFilterMenu:showFilterMenuSlice,
        pagination:paginationSlice,
        showDeleteModal:showDeleteModalSlice
    }
})