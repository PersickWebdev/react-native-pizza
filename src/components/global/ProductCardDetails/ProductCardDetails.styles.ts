import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
    },
    title: {},
    titleText: {
        fontSize: 42,
        fontWeight: '600',
        color: COLORS.golden,
        textTransform: 'uppercase',
    },
    price: {
        flexDirection: 'row',
    },
    priceGeneral: {
        fontSize: 24,
        fontWeight: '600',
        color: COLORS.golden,
    },
    priceLineThrough: {
        marginLeft: 12,
        textDecorationLine: 'line-through',
    },
    image: {
        marginTop: 24,
        padding: 8,
        position: 'relative',
    },
    imagePicture: {
        width: 250,
        height: 250,
    },
    newItem: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 2,
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: COLORS.greenMedium
    },
    newItemText: {
        fontWeight: '500',
        textTransform: 'uppercase',
        color: COLORS.graphite,
    },
    description: {
        alignSelf: 'flex-start',
        marginTop: 12,
    },
    descriptionText: {
        color: COLORS.cream
    },
    ingredients: {
        alignSelf: 'flex-start',
        marginTop: 24,
    },
    ingredientsText: {
        color: COLORS.cream
    },
    addToCartButton: {
        marginTop: 32,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
        backgroundColor: COLORS.greenMedium
    },
    addToCartButtonText: {
        width: 120,
        fontSize: 20,
        fontWeight: '600',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: COLORS.graphite,
    },
});
