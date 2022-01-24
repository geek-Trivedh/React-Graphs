import React, {useState} from 'react';
import {StyleSheet, Dimensions, Button, View, SafeAreaView} from 'react-native';

import {showMessage, hideMessage} from 'react-native-flash-message';
import {LineChart} from 'react-native-chart-kit';
import SwitchButton from './SwitchButton';
import {data} from './stockData';
import Svg, {Text, Rect} from 'react-native-svg';
const Chart = () => {
  const [selected, setSelected] = useState(0);
  const [dataSet, setDataSet] = useState(data.map(el => el.Close));
  let [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });
  const [labels, setLabels] = useState([
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
  ]);

  return (
    <View style={styles.container}>
      {/* <View style={styles.buttonContainer}>
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
      </View> */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <LineChart
          segments={6}
          verticalLabelRotation={30}
          renderDotContent={({x, y, index}) => {
            console.log(x, y, index);
            return (
              <Text
                key={index}
                x={x}
                y={y - 10}
                fill="black"
                fontSize="16"
                fontWeight="normal"
                textAnchor="middle"></Text>
            );
          }}
          onDataPointClick={
            data => {
              // check if we have clicked on the same point again
              let isSamePoint =
                tooltipPos.x === data.x && tooltipPos.y === data.y;
              // if clicked on the same point again toggle visibility
              // else,render tooltip to new position and update its value
              isSamePoint
                ? setTooltipPos(previousState => {
                    return {
                      ...previousState,
                      value: data.value.toFixed(2),
                      visible: !previousState.visible,
                    };
                  })
                : setTooltipPos({
                    x: data.x,
                    value: data.value.toFixed(2),
                    y: data.y,
                    visible: true,
                  });
            } // end function
          }
          decorator={() => {
            return tooltipPos.visible ? (
              <View>
                <Svg>
                  <Rect
                    x={tooltipPos.x - 35}
                    y={tooltipPos.y - 15}
                    width="80"
                    height="20"
                    fill="rgba(244,65,175,1)"
                  />
                  <Text
                    x={tooltipPos.x}
                    y={tooltipPos.y}
                    fill="rgba(0,0,0,1)"
                    fontSize="14"
                    fontWeight=""
                    textAnchor="middle">
                    {tooltipPos.value}
                  </Text>
                </Svg>
              </View>
            ) : null;
          }}
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
          width={Dimensions.get('window').width - 20}
          height={320}
          withInnerLines={false}
          // withVerticalLines={false}
          // withScrollableDot={true}
          chartConfig={chartConfig}
          bezier
        />
      </View>
    </View>
  );
};
export default Chart;

const styles = StyleSheet.create({
  container: {
    margin: 10,
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
  strokeWidth: 2, // optional, default 3
  decimalPlaces: 2,
  fillShadowGradient: '#fff',
  propsForDots: {
    r: '0',
  },
  propsForBackgroundLines: {
    strokeDasharray: '', // solid background lines with no dashes
  },
};
