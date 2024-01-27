import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: COLORS.graphite,
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '100%',
        backgroundColor: COLORS.graphiteLight,
        borderRadius: 14,
        paddingTop: 64,
        paddingBottom: 24,
        justifyContent: 'flex-end',
        alignItems: 'center',
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalContentText: {
        marginBottom: 15,
        textAlign: 'center',
        color: COLORS.cream,
    },
    modalButtonCustomStyle: {
        padding: 8,
        width: '100%',
    },
    modalButtonText: {
        color: COLORS.graphite,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
