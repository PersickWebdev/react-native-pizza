import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
    },
    flatList: {
        rowGap: 8,
    },
    summery: {
        marginTop: 12,
        padding: 8,
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
    totalPrice: {
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    totalPriceText: {
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'uppercase',
        color: COLORS.cream,
    },
    totalPriceTextValue: {
        fontSize: 20,
        color: COLORS.golden,
    },

});

export const CustomStyles = {
    confirmOrderButton: {
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
    // modalSendButton: {
    //     container: {
    //         width: '80%',
    //         backgroundColor: COLORS.greenMedium
    //     },
    //     pressable: {
    //         paddingVertical: 12,
    //     },
    //     text: {
    //         textAlign: 'center',
    //         fontWeight: '600',
    //         textTransform: 'uppercase',
    //     },
    // }
};