import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SocialAuth() {
    const router = useRouter();
    const { provider } = router.query; // Access the dynamic parameter

    // const login = useGoogleOneTapLogin({
    //     onError: (error) => console.log(error),
    //     onSuccess: (response) => console.log(response),
    //     googleAccountConfigs: {
    //         client_id: '69831448235-f7cuj43qt0sii469lmnmtieog99g4400.apps.googleusercontent.com',
    //     },
    // });

    useEffect(() => {
        // Initiate the authentication flow for the selected provider
        if (provider === 'google') {
            initiateGoogleAuthentication();
        } else if (provider === 'facebook') {
            initiateFacebookAuthentication();
        }
        // Add similar conditions for other providers (e.g., 'facebook', 'apple')
    }, [provider]);

    const initiateGoogleAuthentication = () => {
        const clientId = '69831448235-f7cuj43qt0sii469lmnmtieog99g4400.apps.googleusercontent.com';
        const redirectUri = window.location.origin + '/google-callback';
        const scope = 'openid email profile'; // Scopes you want to request
        const responseType = 'token id_token'; // Request both access token and ID token
        const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
        // Redirect to the Google OAuth URL
        window.location.href = url;
    };

    const initiateFacebookAuthentication = () => {
        // You will need to replace 'YOUR_FACEBOOK_APP_ID' with your actual Facebook App ID
        const facebookAppId = '1305509090043554';
        const redirectUri = window.location.origin + '/facebook-callback'; // Replace with your callback URL
        const scope = 'email'; // Requested permissions
        const responseType = 'token'; // Requested response type
        const url = `https://www.facebook.com/v13.0/dialog/oauth?client_id=${facebookAppId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
        // Redirect to the Facebook OAuth URL
        window.location.href = url;
    };

    return <></>;
}
