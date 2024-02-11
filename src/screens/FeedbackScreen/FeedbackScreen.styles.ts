import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    // MODAL
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        height: '45%',
        marginVertical: '20%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 64,
        paddingBottom: 24,
        borderRadius: 14,
        backgroundColor: COLORS.graphiteLight,
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
    activityIndicator: {
        marginTop: 32,
    },
});

export const CustomStyles = {
    leaveFeedbackButton: {
        container: {
            width: '100%',
            backgroundColor: COLORS.greenMedium,
        },
        pressable: {
            paddingVertical: 12,
        },
        text: {
            textAlign: 'center',
            fontWeight: '600',
            textTransform: 'uppercase',
        },
    },
    modalSendButton: {
        container: {
            width: '80%',
            backgroundColor: COLORS.greenMedium
        },
        pressable: {
            paddingVertical: 12,
        },
        text: {
            textAlign: 'center',
            fontWeight: '600',
            textTransform: 'uppercase',
        },
    }
};