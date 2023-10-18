import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: [],
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        setFavorites(state, action) {
            state.favorites = action.payload.data.map((favorite) => favorite.id);
        },
        addFavorite(state, action) {
            state.favorites.push(action.payload.productId);
        },
        deleteFavorite(state, action) {
            state.favorites = state.favorites.filter((id) => id !== action.payload.productId);
        },
    },
});

export const { setFavorites, addFavorite, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice;
