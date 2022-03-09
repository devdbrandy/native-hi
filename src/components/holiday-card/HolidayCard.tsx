import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {format} from 'date-fns';

import {IHoliday} from '@holie/models/holiday.model';
import Colors from '@holie/theme/colors';
import styles from './styles';

Icon.loadFont();

interface HolidayCardProp {
  holiday: IHoliday;
}

const HolidayCard: React.FC<HolidayCardProp> = ({holiday}) => {
  return (
    <View style={styles.card}>
      <Icon
        style={styles.icon}
        name="calendar"
        size={65}
        color={Colors.darkPurple}
      />

      <View style={styles.textWrapper}>
        <Text style={styles.titleText}>{holiday.name}</Text>
        <Text style={styles.calendarText}>
          {format(new Date(holiday.date), 'dd MMMM Y')}
        </Text>
      </View>
    </View>
  );
};

export default HolidayCard;
