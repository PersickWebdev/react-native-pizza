import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {},
    titleText: {
        fontSize: 42,
        fontWeight: '600',
        color: COLORS.golden,
        textTransform: 'uppercase',
    },
    image: {
        padding: 8,
    },
    imagePicture: {
        width: 250,
        height: 250,
    },
    description: {
        marginTop: 12,
    },
    descriptionText: {
        color: COLORS.cream
    },

});