import { configureStore } from '@reduxjs/toolkit';
import { CarSlice } from './slices/carSlice';
import { carApi } from './api/carApi';
export const store = configureStore({
    reducer: {
        cars: CarSlice.reducer,
        [carApi.reducerPath]: carApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([carApi.middleware]),
});




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;