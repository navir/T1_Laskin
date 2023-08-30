import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(null);

  const buttonPressedSum = () => {
    setResult(parseInt(number1) + parseInt(number2));
  }

  const buttonPressedSub = () => {
    setResult(parseInt(number1) - parseInt(number2));
  }

  return (
    <View style={{ justifyContent: 'center', flex: 1 }}>
      <View style={{ alignItems: 'center' }}>
        <Text>Result: {result}</Text>
        <TextInput
          keyboardType='numeric'
          value={number1}
          onChangeText={number1 => setNumber1(number1)}
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        />
        <TextInput
          keyboardType='numeric'
          value={number2}
          onChangeText={number2 => setNumber2(number2)}
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        />
        <StatusBar style="auto" />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10, marginHorizontal: 10 }}>
        <Button title="  +  " onPress={buttonPressedSum} />
        <View style={styles.space}/>
        <Button title="  -  " onPress={buttonPressedSub} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  space: {
    width: 20,
    height: 20,
  },
});
