import apiClient from './apiClient';
import { FEATURE_FLAGS_ENDPOINT } from './apiConstants';

const FeatureService = {
    getFeatures: async () => {
        try {
            const response = await apiClient.get(FEATURE_FLAGS_ENDPOINT);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default FeatureService;
