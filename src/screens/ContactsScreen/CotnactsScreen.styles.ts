import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 12,
        paddingHorizontal: 12,
    },
    section: {
        // marginTop: 12,
        paddingBottom: 6,
    },
    sectionTitle: {
        paddingVertical: 4,
        borderStyle: 'solid',
        borderColor: COLORS.golden,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    sectionTitleNoTopBorder: {
        borderTopWidth: 0,
    },
    sectionTitleText: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '600',
        textTransform: 'uppercase',
        color: COLORS.golden,
    },
    sectionContent: {
        paddingTop: 4,
    },
    sectionContentText: {
        textAlign: 'justify',
        color: COLORS.cream,
    },
    sectionContentInfoBox: {
        marginTop: 12,
    },
    sectionContentInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textBold: {
        fontWeight: '600',
    }
});