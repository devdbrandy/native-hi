import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loader = ({isLoading}: {isLoading: boolean}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={isLoading} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
