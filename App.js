import React from 'react';
import {StyleSheet, View} from 'react-native';
import {VictoryLine, VictoryChart, VictoryTheme} from 'victory-native';

const App = () => {
  return (
    <View style={styles.container}>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          style={{
            data: {stroke: '#c43a31'},
            parent: {border: '1px solid #ccc'},
          }}
          data={[
            {x: 1, y: 2},
            {x: 2, y: 3},
            {x: 3, y: 5},
            {x: 4, y: 4},
            {x: 5, y: 7},
          ]}
        />
      </VictoryChart>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
