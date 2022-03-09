import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import HolidayCard from '@holie/components/holiday-card';
import {RouteStackParamList} from '@holie/navigation/routes';
import {IHoliday} from '@holie/models/holiday.model';
import HeaderTitle from '@holie/components/header-title';
import {isAuthenticated} from '@holie/services/auth.service';
import Loader from '@holie/components/loader';
import styles from './styles';
import {fetchHolidaysByCountryCode} from '@holie/services/holiday.service';

type Props = NativeStackScreenProps<RouteStackParamList, 'Holidays'>;

const HolidaysScreen = ({navigation, route}: Props) => {
  const {countryCode} = route.params;
  const [holidays, setHolidays] = useState<IHoliday[]>([]);
  const [isLoadingHolidays, setIsLoadingHolidays] = useState(false);

  useEffect(() => {
    const checkIsAuthenticated = async () => {
      const authUser = await isAuthenticated();
      if (!authUser) {
        navigation.navigate('Login');
      }
    };
    checkIsAuthenticated();

    const fetchCountries = async () => {
      setIsLoadingHolidays(true);

      const year = new Date().getFullYear();
      const data = await fetchHolidaysByCountryCode({
        country_code: countryCode,
        year,
      });

      setHolidays(data.holidays);
      setIsLoadingHolidays(false);
    };

    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode]);

  const NoResult = () => <Text>No result found</Text>;

  return isLoadingHolidays ? (
    <Loader isLoading={isLoadingHolidays} />
  ) : (
    <View style={styles.container}>
      <HeaderTitle title={`Explore Holidays (${countryCode})`} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {holidays.length ? (
          holidays.map((holiday, i) => (
            <HolidayCard key={i} holiday={holiday} />
          ))
        ) : (
          <NoResult />
        )}
      </ScrollView>
    </View>
  );
};

export default HolidaysScreen;
