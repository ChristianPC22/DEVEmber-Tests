import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';

// We have an array with rest parameters (24), then iterate through every element and adding 1 to the index 
const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {
  return (
    <View style = {styles.container}>

      <FlatList
        data = {days}
        contentContainerStyle = {styles.content}
        columnWrapperStyle = {styles.column}
        numColumns = {2}
        renderItem = {({ item }) => (
          <View style = {styles.box}>
            <Text style = {styles.text}>{item}</Text>
          </View>
        )}
      />

      {/* Iterate every element in the array and return their result, having a unique key that represents every day */}
      {/*days.map(day => (
        <View style = {styles.box} key = {day}>
          <Text style = {styles.text}>{day}</Text>
        </View>
      ))*/}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blanchedalmond',

  },

  content: {
    gap: 10,
    padding: 10
  },

  column: {
    gap: 10    
  },

  box: {
    backgroundColor: '#F9EDE3',
    flex: 1,
    aspectRatio: 1,

    borderWidth: 1,
    // borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9B4521',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#9b4521',
    fontSize: 70
  }
});
