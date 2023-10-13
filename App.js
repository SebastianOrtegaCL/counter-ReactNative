import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {

  const [count, setCount] = useState(0);

  return(
    <View style={styles.container}>
      <Text > You Clicked { count } times</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text>
          Click Me +
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count - 1)}
      >
        <Text>
          Click Me -
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(0)}
      >
        <Text>
          Click Me For Reset
        </Text>
      </TouchableOpacity>
    </View>
  )
}

// React Native Styles: 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#C2F169',
    padding: 10,
    marginBottom: 10,
    borderRadius: 50,

  }

})

export default App;