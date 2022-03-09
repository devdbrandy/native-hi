import {StyleSheet, Platform} from 'react-native';

import Colors from '@holie/theme/colors';
import {ProximaNovaSemiBold} from '@holie/theme/fonts';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondaryColor,
    padding: 8,
    borderRadius: 10,
    marginTop: 16,
  },
  icon: {
    margin: 0,
    padding: 0,
  },
  textWrapper: {
    flexShrink: 1,
    ...Platform.select({
      android: {
        justifyContent: 'space-between',
      },
    }),
  },
  titleText: {
    ...ProximaNovaSemiBold,
    fontSize: 18,
    color: Colors.darkPurple,
  },
  calendarText: {
    color: Colors.darkPurple,
    ...Platform.select({
      ios: {
        marginTop: 5,
      },
    }),
  },
});

export default styles;
