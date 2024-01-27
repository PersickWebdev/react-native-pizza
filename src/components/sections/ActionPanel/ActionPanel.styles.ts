import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    padding: 8,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: COLORS.graphiteLight,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: 8,
  },
  panel__picture: {
    width: 24,
    height: 24,
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
