import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    industries: [],
};

const industrySlice = createSlice({
    name: 'industry',
    initialState,
    reducers: {
        setIndustries(state, action) {
            const { industries } = action.payload;
            state.industries = industries;
        },
    },
});

export const { setIndustries } = industrySlice.actions;
export default industrySlice;
