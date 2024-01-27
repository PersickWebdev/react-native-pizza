import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
    },
    flatList: {
        alignItems: 'center',
        rowGap: 8,
    },
    resultBox: {
        alignItems: 'center',
    },
    resultBoxText: {
        color: COLORS.cream,
    }
});
