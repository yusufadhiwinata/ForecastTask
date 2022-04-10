import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment-timezone';
import FutureForecast from './FutureForecast';

const Forecast = ({weatherData}) => {
  return (
    <ScrollView
      horizontal={true}
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}>
      <CurrentTemperature
        data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}
      />
      <FutureForecast data={weatherData} />
    </ScrollView>
  );
};

const CurrentTemperature = ({data}) => {
  return (
    <View style={styles.currentTempContainer}>
      <Image
        source={{
          uri:
            'https://openweathermap.org/img/wn/' +
            data.weather[0].icon +
            '@2x.png',
        }}
        style={{width: 100, height: 100}}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
        <Text style={styles.temp}>Night - {data.temp.night}&#176;C</Text>
        <Text style={styles.temp}>Day - {data.temp.day}&#176;C</Text>
      </View>
    </View>
  );
};
export default Forecast;

const styles = StyleSheet.create({
  scrollView: {
    flex: 0.4,
    backgroundColor: '#18181bcc',
    padding: 30,
  },
  image: {
    width: 150,
    height: 150,
  },
  currentTempContainer: {
    flexDirection: 'row',
    backgroundColor: '#00000033',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 15,
  },
  day: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#3c3c44',
    padding: 10,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: '200',
    marginBottom: 15,
  },
  temp: {
    fontSize: 16,
    color: 'white',
    fontWeight: '100',
    textAlign: 'center',
  },
  otherContainer: {
    paddingRight: 40,
  },
});
