import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 8,
        flexDirection: 'row',
        borderRadius: 4,
        backgroundColor: COLORS.graphiteLight,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    avatar: {},
    content: {
        marginLeft: 12,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.golden,
    },
    userMessage: {
        marginTop: 4,
        color: COLORS.cream
    },
});