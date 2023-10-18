import apiClient from './apiClient';
// swagger documentation https://lucky.codrv.in/login

const REGISTER = {
    SEND_OTP: '/api/register/sendotp',
    VALIDATE_OTP: '/api/register/validateotp',
    CREATE_PROFILE: '/api/register/profile',
    LOGIN: '/api/OAuth/Token',
};
export const sendOtp = async (userData) => {
    try {
        const response = await apiClient.post(REGISTER.SEND_OTP, userData);
        return response.data;
    } catch (error) {
        // Handle error
        console.error(error);
        throw new Error('Failed to register user');
    }
};

export const validateOtp = async (userData) => {
    try {
        const response = await apiClient.post(REGISTER.VALIDATE_OTP, userData);
        return response.data;
    } catch (error) {
        // Handle error
        console.error(error);
        throw new Error('Failed to register user');
    }
};

export const createProfile = async (userData) => {
    try {
        const response = await apiClient.post(`${REGISTER.CREATE_PROFILE}?token=${userData.accessToken}`, userData);
        return response.data;
    } catch (error) {
        // Handle error
        console.error(error);
        throw new Error('Failed to register user');
    }
};

export const login = async (userData) => {
    try {
        const response = await apiClient.post(REGISTER.LOGIN, userData);
        return response.data;
    } catch (error) {
        // Handle error
        console.error(error);
        throw new Error('Failed to register user');
    }
};
