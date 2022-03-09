import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RouteStackParamList} from '@holie/navigation/routes';
import CountryCard from '@holie/components/country-card';
import {ICountry} from '@holie/models/country.model';
import HeaderTitle from '@holie/components/header-title';
import {isAuthenticated} from '@holie/services/auth.service';
import Loader from '@holie/components/loader';
import {fetchCountriesList} from '@holie/services/holiday.service';
import styles from './styles';

type Props = NativeStackScreenProps<RouteStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [isLoadingCountries, setIsLoadingCountries] = useState(false);

  useEffect(() => {
    const checkIsAuthenticated = async () => {
      const authUser = await isAuthenticated();
      if (!authUser) {
        navigation.navigate('Login');
      }
    };
    checkIsAuthenticated();

    const fetchCountries = async () => {
      setIsLoadingCountries(true);

      const data = await fetchCountriesList();

      setCountries(data.countries);
      setIsLoadingCountries(false);
    };

    fetchCountries();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoadingCountries ? (
    <Loader isLoading={isLoadingCountries} />
  ) : (
    <View style={styles.container}>
      <HeaderTitle title="Browse Countries" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {countries.map((country, i) => (
          <CountryCard
            key={i}
            country={country}
            onPress={() =>
              navigation.navigate('Holidays', {countryCode: country.code})
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
