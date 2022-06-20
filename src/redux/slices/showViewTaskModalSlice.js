import { createSlice } from '@reduxjs/toolkit';

const showViewTaskModalSlice = createSlice({
    name: 'showViewTaskModal',
    initialState: false,
    reducers: {
        showViewTaskModal: (state) => state = true,
        hideViewTaskModal: (state) => state = false
    }
})

export const { showViewTaskModal, hideViewTaskModal } = showViewTaskModalSlice.actions;

export default showViewTaskModalSlice.reducer;