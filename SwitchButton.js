import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
const SwitchButton = props => {
  const switchButtonHandler = e => {
    props.setSelected(props.i);
    props.setDataSet(props.data);
    props.setLabels(props.label);
  };
  console.log(props);
  return (
    <Pressable
      style={
        props.selected
          ? {...styles.button, backgroundColor: '#333'}
          : styles.button
      }
      onPress={switchButtonHandler}>
      <View>
        <Text
          style={
            props.selected ? {...styles.text, color: '#fff'} : styles.text
          }>
          {props.name || 'NA'}
        </Text>
      </View>
    </Pressable>
  );
};
export default SwitchButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#d1cfc9',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#333',
  },
});
