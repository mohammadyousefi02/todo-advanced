import {createSlice} from '@reduxjs/toolkit';

const showFilterMenuSlice = createSlice({
    name: 'showFilterMenu',
    initialState: false,
    reducers: {
        showFilterMenu: (state) => (state = true),
        hideFilterMenu: (state) => (state = false),
    }
})

export const {showFilterMenu, hideFilterMenu} = showFilterMenuSlice.actions;

export default showFilterMenuSlice.reducer;