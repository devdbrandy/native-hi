import {StyleSheet} from 'react-native';
import {ProximaNovaSemiBold} from '@holie/theme/fonts';
import Colors from '@holie/theme/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    ...ProximaNovaSemiBold,
    fontSize: 24,
    paddingVertical: 16,
    color: Colors.primaryColor,
  },
});

export default styles;
