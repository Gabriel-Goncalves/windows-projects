import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Button,
  Pressable,
} from 'react-native';
import logo from './assets/logo.png';

export default function App() {
  const onPressLearnMore = () => {
    return alert('PRIMEIRO BOTÃO');
  };
  const [myName, setMyName] = useState('PRESS ME!')
  const onPressFunction = (id) => {
    if (id === '1') {
      setMyName('on Press IN');
    } else if (id === '2') {
      setMyName('On press out');
    } else if (id === '3') {
      setMyName('On long Press');
    } else if (id === '4') {
      setMyName('On press');
    }
  };
  return (
    // <View style={styles.container}>
    //   <Text>HELLO WORLD!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <ScrollView>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Pressable
          onPress={() => onPressFunction('4')}
          onPressIn={() => onPressFunction('1')}
          onPressOut={() => onPressFunction('2')}
          onLongPress={() => onPressFunction('3')}
        >
          <Text style={{color:'#ff00ff', fontSize: 22}}>{myName}</Text>
        </Pressable>
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Dan' },
            { key: 'Dominic' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
        <ActivityIndicator color="000" />
        <ActivityIndicator size="large" color="000" />
        <ActivityIndicator size="small" color="0000ff" />
        <ActivityIndicator size="large" color="#00ff00" />
        <Image source={logo} style={styles.logo} />
        <Image source={logo} style={styles.logo} />
        <Image source={logo} style={styles.logo} />
        <Image
          source={{ uri: 'https://i.imgur.com/TkIrScD.png' }}
          style={styles.logo}
        />
        <Text style={styles.instructions}>
          {' '}
          To share a photo from your phone with a friend, just press the button
          below!
        </Text>

        <TouchableOpacity
          onPress={() =>
            alert('Hello, world! This is my first app with react native')
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
