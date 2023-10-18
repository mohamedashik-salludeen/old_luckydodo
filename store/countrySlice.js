import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countries: [],
};

const countrySlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setCountries(state, action) {
            const { countries } = action.payload;
            state.countries = countries;
        },
    },
});

export const { setCountries } = countrySlice.actions;
export default countrySlice;
