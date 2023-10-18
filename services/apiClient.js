import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { BASEURL } from './apiConstants';

import { store } from '../store';
import { setAuthData } from '../store/authSlice';

const apiClient = axios.create({
    baseURL: BASEURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const isAccessTokenExpired = (accessToken) => {
    const tokenExpiration = jwtDecode(accessToken).exp;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    return tokenExpiration < currentTimestamp;
};

const refreshAccessToken = async (refreshToken) => {
    try {
        const response = await axios.post(`${BASEURL}/api/OAuth/Token`, {
            refresh_token: refreshToken,
            grant_type: 'refresh_token',
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

apiClient.interceptors.request.use(
    async (config) => {
        const state = store.getState();
        const isAuthenticated = state.auth.isAuthenticated;
        const authData = state.auth.authData;

        if (isAuthenticated && authData) {
            if (isAccessTokenExpired(authData.access_token)) {
                try {
                    const response = await refreshAccessToken(authData.refresh_token);
                    store.dispatch(setAuthData(response));
                    config.headers['Authorization'] = `Bearer ${response.access_token}`;
                } catch (error) {
                    throw error;
                }
            } else {
                config.headers['Authorization'] = `Bearer ${authData.access_token}`;
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default apiClient;
