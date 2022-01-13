import React, {useState} from 'react';
import {StyleSheet, Text, Dimensions, View, SafeAreaView} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import SwitchButton from './SwitchButton';
const Chart = () => {
  const data = [
    {
      name: '1 Month',
      data: [4.3, 4.8, 5, 5, 4.9, 4.8],
      label: ['Today', 'Yesterday', '1 Week', '2 Weeks', '3 Weeks', 'Month'],
    },
    {
      name: '6 Months',
      data: [3.3, 4.8, 5, 5, 4.9, 4.8],
      label: ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    },
    {
      name: '1 Year',
      data: [5.3, 4.8, 5, 5, 4.9, 4.8],
      label: ['JAN', 'MAR', 'MAY', 'JUL', 'SEP', 'NOV', 'DEC'],
    },
    {
      name: 'All Years',
      data: [6.3, 4.8, 5, 5, 4.9, 4.8],
      label: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    },
  ];
  const [selected, setSelected] = useState(0);
  const [dataSet, setDataSet] = useState([1, 2, 3, 4, 5, 6]);
  const [labels, setLabels] = useState([
    'Today',
    'Yesterday',
    '1 Week',
    '2 Weeks',
    '3 Weeks',
    'Month',
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Stock Performance Chart</Text>
      <View style={styles.buttonContainer}>
        {data.map(({name, data, label}, i) => (
          <SwitchButton
            key={i + name}
            setSelected={setSelected}
            setDataSet={setDataSet}
            setLabels={setLabels}
            data={data}
            label={label}
            i={i}
            selected={selected === i}
            name={name}
          />
        ))}
      </View>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: dataSet, //Array of values
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
              strokeWidth: 2, // optional
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={320}
        verticalLabelRotation={30}
        withInnerLines={false}
        chartConfig={chartConfig}
        bezier // type of line chart
      />
    </SafeAreaView>
  );
};
export default Chart;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: '700',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
});
const chartConfig = {
  backgroundGradientFrom: 0,
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  backgroundColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 25, // optional, default 3
};
