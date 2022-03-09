import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import {ICountry} from '@holie/models/country.model';
import {ProximaNovaSemiBold} from '@holie/theme/fonts';
import Colors from '@holie/theme/colors';

Icon.loadFont();

interface HolidayCardProp {
  country: ICountry;
  onPress: (name: string) => void;
}

const CountryCard: React.FC<HolidayCardProp> = ({country, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(country.name)}>
      <View style={styles.card}>
        <Text style={styles.text}>{country.name}</Text>
        <Text style={styles.text}> - {country.code}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CountryCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondaryColor,
    padding: 16,
    borderRadius: 10,
    marginTop: 16,
  },
  text: {
    ...ProximaNovaSemiBold,
    fontSize: 18,
    color: Colors.darkPurple,
  },
});
