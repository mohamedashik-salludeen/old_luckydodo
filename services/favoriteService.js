import apiClient from './apiClient';
import { FAVORITES_ENDPOINT } from './apiConstants'; // Import the endpoint constant

const FavoritesService = {
    getFavorites: async () => {
        try {
            const response = await apiClient.get(FAVORITES_ENDPOINT);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    addFavorite: async (favoriteData) => {
        try {
            const response = await apiClient.post(FAVORITES_ENDPOINT, favoriteData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    deleteFavorite: async (favoriteId) => {
        try {
            const response = await apiClient.delete(`${FAVORITES_ENDPOINT}/${favoriteId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default FavoritesService;
