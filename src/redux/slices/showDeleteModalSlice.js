import {createSlice} from '@reduxjs/toolkit';

const showDeleteModalSlice = createSlice({
    name: 'showDeleteModal',
    initialState: false,
    reducers: {
        showDeleteModal: (state) => (state = true),
        hideDeleteModal: (state) => (state = false),
    }
})

export const {showDeleteModal, hideDeleteModal} = showDeleteModalSlice.actions;

export default showDeleteModalSlice.reducer;