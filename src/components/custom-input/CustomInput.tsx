import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './styles';

interface ICustomInputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
}

const CustomInput: React.FC<ICustomInputProps> = ({
  value = '',
  setValue,
  placeholder = '',
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={text => setValue(text)}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;
