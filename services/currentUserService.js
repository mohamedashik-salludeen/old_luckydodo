import apiClient from './apiClient';
import { CURRENT_USER_ENDPOINT } from './apiConstants'; // Import the endpoint constant

const CurrentUserService = {
    getCurrentUser: async () => {
        try {
            const response = await apiClient.get(CURRENT_USER_ENDPOINT);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updateUserDetails: async (userData) => {
        try {
            const response = await apiClient.put(`${CURRENT_USER_ENDPOINT}/update`, userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    updateUserAvatar: async (userData) => {
        try {
            const response = await apiClient.put(`${CURRENT_USER_ENDPOINT}/avatar`, userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updatePassword: async (passwordData) => {
        try {
            const response = await apiClient.put(`${CURRENT_USER_ENDPOINT}/password`, passwordData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default CurrentUserService;
