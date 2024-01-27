import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    container: {
        width: '95%',
        padding: 8,
        flexDirection: 'row',
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

    // IMAGE
    image: {
        position: 'relative',
        marginRight: 8,
    },

    imageNewItemNote: {
        width: 24,
        height: 24,
        position: 'absolute',
        top: 5,
        right: 5,
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: COLORS.greenMedium,
    },

    imageNewItemNoteText: {
        fontSize: 9,
        fontWeight: 'bold',
    },

    imagePicture: {
        width: 75,
        height: 75,
        zIndex: 1,
    },

    // CONTENT BOX
    contentBox: {
        flex: 1,
        justifyContent: 'space-between',
    },

    // HEADER
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    // HEADER: TITLE
    titleText: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: COLORS.golden,
    },

    // HEADER: PRICE
    price: {
        flexDirection: 'row',
    },

    priceNew: {
        fontWeight: 'bold',
    },

    priceGeneral: {
        marginLeft: 12,
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.golden,
    },

    priceOld: {
        textDecorationLine: 'none',
    },

    priceOldLineThrough: {
        textDecorationLine: 'line-through',
    },

    // FOOTER
    footer: {
        flexDirection: 'row',
    },

    // FOOTER: INGREDIENTS
    ingredients: {
        marginTop: 6,
        width: '80%',
    },

    ingredientsTitle: {
        fontSize: 14,
        fontWeight: '500',
        textTransform: 'uppercase',
        color: COLORS.cream,
    },

    ingredientsText: {
        marginTop: 6,
        color: COLORS.cream,
    },

    // FOOTER: ACTIONS
    actions: {
        width: '20%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    actionsCart: {
        marginTop: 8,
        width: 42,
        height: 42,
    },
});
