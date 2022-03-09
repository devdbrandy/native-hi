import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import HolidayCard from './HolidayCard';
import {IHoliday} from '@holie/models/holiday.model';

const mockHoliday = {
  date: '2022-01-01',
  name: "New Year's Day",
  local_name: "New Year's Day",
  country_code: 'GB',
  regions: ['GB-NIR'],
  types: ['Public'],
};

describe('HolidayCard', () => {
  const renderComponent = (props: any = {}) => {
    const defaultProps: {holiday: IHoliday} = {
      holiday: {...mockHoliday},
    };

    return render(<HolidayCard {...defaultProps} {...props} />);
  };

  it('renders correctly', () => {
    const {getByTestId} = renderComponent();
    const titleText = getByTestId('title');
    const dateText = getByTestId('date');

    expect(titleText.children.join('')).toEqual(mockHoliday.name);
    expect(dateText.children.join('')).toEqual('01 January 2022');
  });
});
