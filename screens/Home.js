import {StyleSheet, SafeAreaView, View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getForecast} from '../services/services';
import DateTime from '../components/DateTime';
import Forecast from '../components/Forecast';
import react from 'react';
import Error from './Error';
import GetLocation from 'react-native-get-location';

const Home = () => {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 10000,
    })
      .then(location => {
        getForecast(location.latitude, location.longitude)
          .then(response => {
            setData(response);
          })
          .catch(() => {
            setError(true);
          })
          .finally(() => {
            setLoaded(true);
          });
      })
      .catch(error => {
        const {code, message} = error;
      });
  }, []);

  return (
    <react.Fragment>
      <SafeAreaView style={styles.mainContainer}>
        {loaded && !error && (
          <View style={{width: '100%', height: '100%'}}>
            <DateTime
              current={data.current}
              timezone={data.timezone}
              lat={data.lat}
              lon={data.lon}
            />
            <Forecast weatherData={data.daily} />
          </View>
        )}
        {!loaded && <ActivityIndicator size={'large'} style={{flex: 1}} />}
        {error && <Error />}
      </SafeAreaView>
    </react.Fragment>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#87CEEB',
    flex: 1,
  },
});
