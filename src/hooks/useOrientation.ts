import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

type OrientationType = 'portrait' | 'landscape';

const defineScreenOrientation = () => {
    const { width, height } = Dimensions.get('screen');
    if (width < height) return 'portrait';
    return 'landscape';
};

export const useOrientation = () => {
    const [ orientation, setOrientation ] = useState<OrientationType>(defineScreenOrientation());

    const handleChange = () => {
        setOrientation(defineScreenOrientation());
    };

    useEffect(() => {
        const listener = Dimensions.addEventListener('change', handleChange);
        return () => listener.remove();
    }, []);

    return { orientation };
};