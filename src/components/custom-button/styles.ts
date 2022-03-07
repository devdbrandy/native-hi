import {StyleSheet} from 'react-native';

import {ProximaNovaSemiBold} from '@holie/theme/fonts';
import Colors from '@holie/theme/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondaryColor,
    width: '100%',
    padding: 16,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    ...ProximaNovaSemiBold,
    fontSize: 16,
    color: 'white',
  },
});

export default styles;
