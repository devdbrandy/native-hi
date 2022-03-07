import {StyleSheet} from 'react-native';
import {ProximaNovaRegular} from '@holie/theme/fonts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 5,
  },
  input: {
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    padding: 16,
    ...ProximaNovaRegular,
  },
});

export default styles;
