import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkmarkBox: {
        width: 24,
        height: 24,
        marginRight: 12,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: COLORS.graphite,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmark: {
        width: 14,
        height: 14,
        backgroundColor: COLORS.graphite,
        borderRadius: 2,
        display: 'none',
    },
    isVisible: {
        display: 'flex',
    },
    label: {},
    labelText: {},
});