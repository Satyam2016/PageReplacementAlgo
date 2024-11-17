import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    frames: 3,
    ref: [2,3,4,5,3,2],
};

export const algoSlice = createSlice({
    name: 'algo',
    initialState,
    reducers: {
        Frame: (state, action) => {
            state.frames = action.payload;
        },
        Reference : (state, action) => {
            state.ref = action.payload;
        }
    },
});

export const { Frame, Reference } = algoSlice.actions;
export default algoSlice.reducer;
