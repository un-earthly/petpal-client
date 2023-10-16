import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICar {
    data: any; // data stored from API
    currIndex: number; // current active car tab index
}

const initialState: ICar = {
    data: undefined,
    currIndex: 0,
};

// creating action-reducer slice
export const CarSlice = createSlice({
    name: "car_slice",
    initialState,
    reducers: {
        // manage/control the currIndex value
        changeCurrIndex: (state, action: PayloadAction<number>) => {
            state.currIndex = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeCurrIndex } = CarSlice.actions;

export default CarSlice.reducer