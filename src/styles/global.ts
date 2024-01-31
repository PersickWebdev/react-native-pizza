import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';

export const GlobalStyles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: COLORS.graphite,
        // Todo: find out what element sets paddings and remove 'paddingTop' & 'paddingBottom'.
        paddingTop: -59,
        paddingBottom: -59,
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    text: {
        color: COLORS.cream
    }
});