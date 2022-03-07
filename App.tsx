import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Colors from '@holie/theme/colors';
import MainNavigation from '@holie/navigation/MainNavigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
  },
});

export default App;
