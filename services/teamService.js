import apiClient from './apiClient';
import { TEAMS_ENDPOINT } from './apiConstants';

const TeamService = {
    getTeams: async () => {
        try {
            const response = await apiClient.get(TEAMS_ENDPOINT);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    createTeam: async (teamData) => {
        try {
            const response = await apiClient.post(TEAMS_ENDPOINT, teamData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    deleteTeam: async (teamId) => {
        try {
            const response = await apiClient.delete(`${TEAMS_ENDPOINT}/${teamId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    deleteTeamMember: async (teamMemberId) => {
        try {
            const response = await apiClient.delete(`${TEAMS_ENDPOINT}/${teamMemberId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default TeamService;
