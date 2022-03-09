import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import LoginScreen from './LoginScreen';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('LoginScreen', () => {
  it('renders correctly', () => {
    const component = render(<LoginScreen />);
    expect(component).toBeDefined();
  });
});
