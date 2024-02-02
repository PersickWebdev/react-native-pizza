import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

export const useKeyboard = () => {
    const [ keyboardStatus, setKeyboardStatus ] = useState('');
    const [ keyboardMetrics, setKeyboardMetrics ] = useState({
        height: 0,
        width: 0,
    });

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', (event) => {
            setKeyboardStatus('Keyboard Shown');
            setKeyboardMetrics((state) => {
                return {
                    ...state,
                    height: event.endCoordinates.height,
                    width: event.endCoordinates.width,
                }
            })
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardStatus('Keyboard Hidden');
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return { keyboardStatus, keyboardMetrics };
};