import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryScatter,
  VictoryCursorContainer,
} from 'victory-native';
import {data} from './stockData';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <VictoryScatter
        containerComponent={
          <VictoryCursorContainer
            cursorLabel={({datum}) =>
              `${Math.round(datum.x, 2)}, ${Math.round(datum.y, 2)}`
            }
          />
        }
      /> */}
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          style={{
            data: {stroke: '#c43a31'},
            parent: {border: '1px solid #ccc'},
          }}
          containerComponent={
            <VictoryCursorContainer
              cursorLabel={({datum}) =>
                `${Math.round(datum.x, 2)}, ${Math.round(datum.y, 2)}`
              }
            />
          }
          animate={{
            duration: 2000,
            onLoad: {duration: 1000},
          }}
          interpolation="natural"
          theme={VictoryTheme.material}
          // categories={{x: []}}
          data={data.map(el => ({y: el.Close}))}
          // labels={({datum}) => datum.y}
          // labelComponent={<Text renderInPortal dy={-20} />}
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
