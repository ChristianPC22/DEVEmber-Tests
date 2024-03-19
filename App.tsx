import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Cute Border Collie with black and white hair</Text>

      <View style = {styles.imageContainer}>
        <Image source = {require('./resources/img/borderCollie.jpg')} style = {styles.image}></Image>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blanchedalmond',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 24,
    textAlign: 'center',
    width: 250,
    marginBottom: 10,
  },

  image: {
    width: 300,
    height: 300
  },

  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden'
  }
});
