import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative',
    },
    input: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        backgroundColor: COLORS.cream,
    },
    label: {
        position: 'absolute',
        top: 12,
        left: 12,
        zIndex: 2,
        pointerEvents: 'none',
    },
    labelText: {
        textTransform: 'uppercase',
        color: COLORS.graphite,
    },
});