import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 6,
        width: '90%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: COLORS.cream,
    },
    heading: {},
    headingText: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: COLORS.golden,
    },
});

export const CustomStyles = {
    input: {

    }
}