import React, {useState, useEffect} from 'react';
import {Image, KeyboardAvoidingView, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Logo from '@holie/assets/images/logo2.png';
import CustomInput from '@holie/components/custom-input/CustomInput';
import CustomButton from '@holie/components/custom-button';
import {isAuthenticated, authenticateUser} from '@holie/services/auth.service';
import {isValidEmail, isValidPassword} from '@holie/utils/helpers.util';
import styles from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const {height} = useWindowDimensions();
  const {navigate} = useNavigation();

  useEffect(() => {
    const checkIsAuthenticated = async () => {
      const authUser = await isAuthenticated();
      if (authUser) {
        navigate('Home');
      }
    };
    checkIsAuthenticated();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const redirectToHome = () => {
    setEmail('');
    setPassword('');
    navigate('Home');
    setIsAuthenticating(false);
  };

  const handleLogin = async () => {
    await authenticateUser({email, password});
    redirectToHome();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <CustomInput value={email} setValue={setEmail} placeholder="Email" />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeholder="Password"
        secureTextEntry
      />

      <CustomButton
        title="LOGIN"
        onPress={handleLogin}
        isLoading={isAuthenticating}
        isDisabled={!isValidEmail(email) || !isValidPassword(password)}
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
