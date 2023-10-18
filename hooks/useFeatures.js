import { useState, useEffect } from 'react';
import FeatureService from '../services/featureService';

export function useFeatures() {
    const [features, setFeatures] = useState({});

    useEffect(() => {
        // Replace with your API endpoint
        FeatureService.getFeatures()
            .then((response) => {
                setFeatures(response.data);
            })
            .catch((error) => {
                console.error('Error fetching features:', error);
            });
    }, []);

    return features;
}
