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
  btnOutline: {
    backgroundColor: 'white',
    borderColor: Colors.secondaryColor,
    borderWidth: 2,
    color: Colors.secondaryColor,
  },
  text: {
    ...ProximaNovaSemiBold,
    fontSize: 16,
    color: 'white',
  },
  btnOutlineText: {
    ...ProximaNovaSemiBold,
    fontSize: 16,
    color: Colors.secondaryColor,
  },
  btnDisabled: {
    backgroundColor: Colors.gray200,
  },
});

export default styles;
