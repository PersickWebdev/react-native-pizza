import { useCallback } from 'react';
import { useSharedValue, useAnimatedStyle, Easing, withTiming } from 'react-native-reanimated';
import { COLORS } from '@/constants/colors';

export const useCustomInputAnimation = () => {
    const translateY = useSharedValue(0);
    const color = useSharedValue(COLORS.graphite);

    // @ts-ignore
    const animatedLabelContainerStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: withTiming(
                        translateY.value,
                        {
                        duration: 300,
                        easing: Easing.inOut(Easing.ease)
                    })
                },
            ],
        }
    });

    // @ts-ignore
    const animatedLabelTextStyles = useAnimatedStyle(() => {
        return {
            color: withTiming(
                color.value,
                {
                    duration: 300,
                    easing: Easing.inOut(Easing.ease)
                }
            ),
        }
    });

    const handleAnimationStart = useCallback(() => {
        translateY.value = withTiming(
            translateY.value = translateY.value - 30,
            {
                    duration: 0.2,
                    easing: Easing.ease
                }
            );
        color.value = withTiming(
            color.value = COLORS.cream,
            {
                    duration: 300,
                    easing: Easing.inOut(Easing.ease)
                }
            );
    }, []);

    const handleAnimationEnd = useCallback(() => {
        translateY.value = withTiming(
            translateY.value = 0,
            {
                    duration: 0.2,
                    easing: Easing.ease
                }
            );
        color.value = withTiming(
            color.value = COLORS.graphite,
            {
                    duration: 300,
                    easing: Easing.inOut(Easing.ease)
                }
            );
    }, []);

    return {
        animatedLabelContainerStyles,
        animatedLabelTextStyles,
        handleAnimationStart,
        handleAnimationEnd
    };
};