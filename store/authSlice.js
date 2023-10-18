import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    authData: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setAuthData: (state, action) => {
            state.authData = action.payload;
            state.isAuthenticated = true;
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.authData = null;
        },
        setAvatar: (state, action) => {
            state.user.avatar = action.payload;
        },
    },
});

export const { setUser, logoutUser, setAuthData, setAvatar } = authSlice.actions;

export default authSlice;
