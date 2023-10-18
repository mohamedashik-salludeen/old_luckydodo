import apiClient from './apiClient';
import { ANALYTICS_ENDPOINT } from './apiConstants'; // Import the endpoint constant

const AnalyticsService = {
    addAnalytics: async (data) => {
        try {
            const response = await apiClient.post(ANALYTICS_ENDPOINT, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default AnalyticsService;
