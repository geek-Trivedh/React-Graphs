import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Header = () => (
  <Text style={styles.heading}>Stock Performance Chart</Text>
);
export default Header;
const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: '700',
    padding: 10,
  },
});
