import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  type?: 'default' | 'outline';
  isDisabled?: boolean;
  isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  type = 'default',
  isDisabled,
  isLoading,
}) => {
  const textStyle = type === 'outline' ? styles.btnOutlineText : styles.text;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'outline' ? styles.btnOutline : {},
        isDisabled ? styles.btnDisabled : {},
      ]}
      onPress={onPress}
      disabled={isDisabled}>
      {!isLoading ? (
        <Text style={textStyle}>{title}</Text>
      ) : (
        <ActivityIndicator animating={isLoading} />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
