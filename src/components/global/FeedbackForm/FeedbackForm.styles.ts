import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 6,
        width: '90%',
        height: '100%',
        justifyContent: 'space-between',
    },
    heading: {
        marginBottom: 32,
    },
    headingText: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: COLORS.golden,
    },
    sections: {
        gap: 24,
    },
    section: {},
    actions: {
        flexDirection: 'row',
        columnGap: 24,
    },
});

const ButtonStyles = {
    generalContainer: {
        flex: 1,
        borderRadius: 4,
    },
    generalPressable: {
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    }
}

export const CustomStyles = {
    buttonClose: {
        container: ButtonStyles.generalContainer,
        pressable: {
            ...ButtonStyles.generalPressable,
            backgroundColor: COLORS.red,
        },

    },
    buttonSend: {
        container: ButtonStyles.generalContainer,
        pressable: {
            ...ButtonStyles.generalPressable,
            backgroundColor: COLORS.greenMedium,
        },
    },
};