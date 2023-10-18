import apiClient from './apiClient';
import { PARTICIPANTS_ENDPOINT } from './apiConstants'; // Import the endpoint constant

const ParticipantsService = {
    getParticipants: async () => {
        try {
            const response = await apiClient.get(PARTICIPANTS_ENDPOINT);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    addParticipant: async (participantData) => {
        try {
            const response = await apiClient.post(PARTICIPANTS_ENDPOINT, participantData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    deleteParticipant: async (participantId) => {
        try {
            const response = await apiClient.delete(`${PARTICIPANTS_ENDPOINT}/${participantId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default ParticipantsService;
