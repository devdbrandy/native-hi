import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

import Colors from '@holie/theme/colors';
import {localStorageService} from '@holie/services/local-storage.service';
import styles from './styles';

Icon.loadFont();

interface HeaderProp {
  title: string;
}

const HeaderTitle: React.FC<HeaderProp> = ({title}) => {
  const {navigate} = useNavigation();

  const signOut = async () => {
    const storage = localStorageService();
    await storage.removeItem('authUser');
    navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} testID="title">
        {title}
      </Text>
      <Pressable onPress={signOut} testID="logout-btn">
        <Icon name="sign-out" size={20} color={Colors.gray300} />
      </Pressable>
    </View>
  );
};

export default HeaderTitle;
