import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CountryCard, {HolidayCardProp} from './CountryCard';

const mockCountry = {name: 'United Kingdom', code: 'UK'};

describe('CountryCard', () => {
  const renderComponent = (props: any = {}) => {
    const defaultProps: HolidayCardProp = {
      country: {...mockCountry},
      onPress: () => null,
    };

    return render(<CountryCard {...defaultProps} {...props} />);
  };

  it('renders correctly', () => {
    const {getByTestId} = renderComponent();
    const countryNameText = getByTestId('country-name');
    const countryCodeText = getByTestId('country-code');

    expect(countryNameText.children[0]).toEqual(mockCountry.name);
    expect(countryCodeText.children.join('')).toEqual(` - ${mockCountry.code}`);
  });

  it('should handle onPress event', () => {
    const spyFn = jest.fn();
    const {getByTestId} = renderComponent({onPress: spyFn});
    const button = getByTestId('card-btn');

    fireEvent.press(button);

    expect(spyFn).toHaveBeenCalledWith(mockCountry.name);
  });
});
