import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import RNRestart from 'react-native-restart';

const startReload = () => RNRestart.Restart();

const Error = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text>Oopss something wrong,please try again</Text>
      <TouchableOpacity onPress={startReload}>
        <Text>Restart App!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({});
