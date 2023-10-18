import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { login } from '../services/userService';
import { setAuthData, setUser } from '../store/authSlice';
import CurrentUserService from '../services/currentUserService';
import { setAccessTokenAndType } from '../store/registerSlice';

export default function GoogleCallback() {
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
        // Retrieve the access token and ID token from the URL hash fragment
        const hash = window.location.hash;
        const idTokenMatch = hash.match(/id_token=([^&]+)/);
        console.log('hash', hash);
        if (idTokenMatch) {
            const idToken = idTokenMatch[1];

            // Call your custom function and pass the ID token

            checkUser(idToken);
        }
    }, []);

    return <div>Processing Google login...</div>;
}

GoogleCallback.getLayout = function getLayout(page) {
    return <>{page}</>;
};
