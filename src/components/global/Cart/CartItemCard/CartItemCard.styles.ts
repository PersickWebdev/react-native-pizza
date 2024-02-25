import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
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
    image: {
        position: 'relative',

    },
    imagePicture: {
        width: 46,
        height: 46,
    },
    content: {
        flexDirection: 'row',
        marginLeft: 8,
    },
    title: {
        maxWidth: 130,
        width: '100%',
        justifyContent: 'center',

    },
    titleText: {
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'uppercase',
        color: COLORS.golden,
    },
    actions: {
        width: '54%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    quantityControl: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantity: {
        width: 24,
    },
    quantityText: {
        fontSize: 16,
        textAlign: 'center',
        color: COLORS.cream,
    },
    price: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        color: COLORS.cream,
    },
});