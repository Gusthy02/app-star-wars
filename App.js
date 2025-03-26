import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const request = async (callback) => {
  const response = await fetch('https://swapi.dev/api/people/');
  const parsed = await response.json();
  callback(parsed.results);
}

export default function App() {
  const [registros, setRegistros] = useState([])

  useEffect(() => {
    request(setRegistros)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>API do Star Wars</Text>
      <FlatList
        data={registros}
        renderItem={({ item }) =>
          <View style={styles.itens}>
            <Text style={styles.textNames}> Nome:{item.name} </Text>
            <Text style={styles.textNames}>Cor dos olhos:{item.eye_color}</Text>
          </View>
        }
      />
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 25,
    paddingBottom: 25,
  },
  itens: {
    backgroundColor: "gold",
    flex: 1,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    width: 350
  },
  title: {
    marginVertical: 30,
    fontSize: 25,
    color: 'gold'
  },
  textNames: {
    color: '#ffff',
    fontSize: 17,
    textAlign: 'center'
  }
});
