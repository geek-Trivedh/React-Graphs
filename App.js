import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Chart from './Chart';
import Header from './Header';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Header />
    <Chart />
  </SafeAreaView>
);
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
