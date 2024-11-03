import {configureStore} from '@reduxjs/toolkit';
import algoReducer from '../feature/algo/algoSlice';

export const store = configureStore({
    reducer: algoReducer
})