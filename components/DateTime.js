import moment from 'moment-timezone';
import React, {useEffect, useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const CardItem = ({title, value, unit}) => {
  return (
    <View style={styles.cardItem}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardTitle}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const DateTime = ({current, lat, lon, timezone}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? 'pm' : 'am';

      setTime(
        (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) +
          ':' +
          (minutes < 10 ? '0' + minutes : minutes) +
          ampm,
      );

      setDate(days[day] + ', ' + date + ' ' + months[month]);
    }, 1000);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View>
        <View>
          <Text style={styles.timeTitle}>{time}</Text>
        </View>
        <View>
          <Text style={styles.dateTitle}>{date}</Text>
        </View>
        <View style={styles.cardContainer}>
          <CardItem
            title="Humidity"
            value={current ? current.humidity : ''}
            unit="%"
          />
          <CardItem
            title="Pressure"
            value={current ? current.pressure : ''}
            unit="%"
          />
          <CardItem
            title="Sunrise"
            value={
              current
                ? moment.tz(current.sunrise * 1000, timezone).format('HH:mm')
                : ''
            }
            unit="am"
          />
          <CardItem
            title="Sunset"
            value={
              current
                ? moment.tz(current.sunset * 1000, timezone).format('HH:mm')
                : ''
            }
            unit="pm"
          />
        </View>
      </View>
      <View style={styles.city}>
        <Text style={styles.city}>{timezone}</Text>
        <Text style={styles.lat}>
          {lat} and {lon}
        </Text>
      </View>
    </View>
  );
};

export default DateTime;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 2,
  },
  timeTitle: {
    color: 'white',
    fontWeight: '400',
    fontSize: 24,
  },
  dateTitle: {
    color: 'white',
    fontWeight: '300',
    fontSize: 16,
    marginTop: 16,
  },
  cardContainer: {
    backgroundColor: 'white',
    elevation: 20,
    borderRadius: 2,
    marginTop: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardItem: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 200,
    padding: 8,
  },
  cardTitle: {
    color: 'black',
  },
  city: {
    textAlign: 'right',
    color: 'white',
  },
  lat: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
});
