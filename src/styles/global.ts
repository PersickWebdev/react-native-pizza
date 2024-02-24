import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';

export const GlobalStyles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: COLORS.graphite,
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