import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import HeaderTitle from './HeaderTitle';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('HeaderTitle', () => {
  const renderComponent = () => {
    return render(<HeaderTitle title="Explore" />);
  };

  it('renders correctly', () => {
    const {getByTestId} = renderComponent();
    const titleText = getByTestId('title');

    expect(titleText.children.join('')).toEqual('Explore');
  });
});
