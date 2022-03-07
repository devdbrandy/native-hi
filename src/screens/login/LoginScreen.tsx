import React, {useState} from 'react';
import {Image, KeyboardAvoidingView, useWindowDimensions} from 'react-native';

import Logo from '@holie/assets/images/logo2.png';
import CustomInput from '@holie/components/custom-input/CustomInput';
import CustomButton from '@holie/components/custom-button';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const {navigate} = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <CustomInput
        value={username}
        setValue={setUsername}
        placeholder="Username"
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeholder="Password"
        secureTextEntry
      />

      <CustomButton title="LOGIN" onPress={() => navigate('Home')} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
