import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment-timezone';

const FutureForecast = ({data}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {data && data.length > 0 ? (
        data.map(
          (data, idx) =>
            idx > 4 && <FutureForecastItem key={idx} forecastItem={data} />,
        )
      ) : (
        <View />
      )}
    </View>
  );
};

const FutureForecastItem = ({forecastItem}) => {
  return (
    <View style={styles.futureForecastItemContainer}>
      <Text style={styles.day}>
        {moment(forecastItem.dt * 1000).format('ddd')}
      </Text>

      <Image
        source={{
          uri:
            'https://openweathermap.org/img/wn/' +
            forecastItem.weather[0].icon +
            '@2x.png',
        }}
        style={{width: 100, height: 100}}
      />
      <Text style={styles.temp}>Night {forecastItem.temp.night}</Text>
      <Text style={styles.temp}>Day - {forecastItem.temp.day}&#176;C</Text>
    </View>
  );
};
export default FutureForecast;

const styles = StyleSheet.create({
  futureForecastItemContainer: {
    justifyContent: 'center',
    backgroundColor: '#00000033',
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 20,
    marginLeft: 10,
  },
  day: {
    fontSize: 20,
    color: 'white',
    padding: 10,
    textAlign: 'center',
    fontWeight: '200',
    marginBottom: 15,
  },
  temp: {
    fontSize: 14,
    color: 'white',
    fontWeight: '100',
    textAlign: 'center',
  },
});
