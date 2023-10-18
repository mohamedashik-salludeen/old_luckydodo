import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    phoneNumber: null,
    accessToken: null,
    otp: null,
    loginType: 0,
    user: {},
};

const registerSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRegistrationInfo(state, action) {
            const { phoneNumber, accessToken, otp, loginType } = action.payload;
            state.phoneNumber = phoneNumber;
            state.accessToken = accessToken;
            state.otp = otp;
            state.loginType = loginType || 0;
        },
        setAccessTokenAndType(state, action) {
            const { accessToken, loginType } = action.payload;
            state.accessToken = accessToken;
            state.loginType = loginType;
        },

        setUser(state, action) {
            const { data } = action.payload;
            state.user = data;
        },
        resetToInitial: (state) => initialState,
    },
});

export const { setRegistrationInfo, setAccessTokenAndType, setUser, resetToInitial } = registerSlice.actions;
export default registerSlice;
