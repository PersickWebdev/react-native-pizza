import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    input: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
        backgroundColor: COLORS.cream,
    },
    label: {
        marginBottom: 4,
        textTransform: 'uppercase',
        color: COLORS.cream,
    }
});