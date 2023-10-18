import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    city: null,
    cities: [],
};

const citySlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        setCity(state, action) {
            const { city } = action.payload;
            state.city = city;
        },
        setCities(state, action) {
            const { cities } = action.payload;
            state.cities = cities;
        },
    },
});

export const { setCity, setCities } = citySlice.actions;
export default citySlice;
