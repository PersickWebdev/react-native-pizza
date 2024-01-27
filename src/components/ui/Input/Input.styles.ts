import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'none',
  },
  'is-visible': {
    display: 'flex',
    flex: 3,
  },
  inputElement: {
    padding: 4,
    color: COLORS.graphite,
    backgroundColor: COLORS.cream,
    borderRadius: 4,
  },
});
