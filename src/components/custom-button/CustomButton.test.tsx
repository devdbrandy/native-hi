import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CustomButton, {CustomButtonProps} from './CustomButton';

describe('CustomButton', () => {
  const renderComponent = (props: any = {}) => {
    const defaultProps: CustomButtonProps = {
      title: 'Login',
      onPress: () => null,
    };

    return render(<CustomButton {...defaultProps} {...props} />);
  };

  it('renders correctly', () => {
    const {getByTestId} = renderComponent();
    const buttonText = getByTestId('btn-text');

    expect(buttonText.children.join('')).toEqual('Login');
  });

  it('should handle onPress event', () => {
    const spyFn = jest.fn();
    const {getByTestId} = renderComponent({onPress: spyFn});
    const button = getByTestId('btn');

    fireEvent.press(button);

    expect(spyFn).toHaveBeenCalled();
  });
});
