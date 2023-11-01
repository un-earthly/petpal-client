import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
        provider: '',
    },
    reducers: {
        signIn: (state, action) => {
            state.isAuthenticated = true;
            state.provider = action.payload.provider;
        },
        signOut: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.provider = '';
        },
    },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
