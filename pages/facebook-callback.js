import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { login } from '../services/userService';
import { setAuthData, setUser } from '../store/authSlice';
import CurrentUserService from '../services/currentUserService';
import { setAccessTokenAndType } from '../store/registerSlice';

export default function FacebookCallback() {
    const router = useRouter();
    const dispatch = useDispatch();

    const checkUser = async (idToken) => {
        const response = await login({ grant_type: 'google', idToken });

        if (response.access_token) {
            dispatch(setAuthData(response));
            const currentUser = await CurrentUserService.getCurrentUser();
            dispatch(setUser(currentUser.data));
            router.push('/');
        } else if (response.data) {
            dispatch(setAccessTokenAndType(response.data));
            router.push('/registration');
        }
    };

    useEffect(() => {
        // Retrieve the access token from the URL query string
        const queryParams = new URLSearchParams(window.location.search);
        const accessToken = queryParams.get('access_token');

        if (accessToken) {
            // Call your custom function and pass the access token
            checkUser(accessToken);
        }
    }, []);

    return <div>Processing Facebook login...</div>;
}

FacebookCallback.getLayout = function getLayout(page) {
    return <>{page}</>;
};
