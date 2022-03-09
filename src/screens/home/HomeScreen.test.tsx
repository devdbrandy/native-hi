import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const defaultProps: any = {
      navigation: jest.fn(),
      route: jest.fn(),
    };
    const component = render(<HomeScreen {...defaultProps} />);
    expect(component).toBeDefined();
  });
});
