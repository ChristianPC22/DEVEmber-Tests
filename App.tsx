import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import DayListItem from './src/components/core/DayListItem';

// We have an array with rest parameters (24), then iterate through every element and adding 1 to the index 
const days = [...Array(24)].map((val, index) => index + 1);

// Parent component
export default function App() {
  return (
    <View style = {styles.container}>
      <FlatList
        data = {days}
        contentContainerStyle = {styles.content}
        columnWrapperStyle = {styles.column}
        numColumns = {2}
        renderItem = {({ item }) => <DayListItem day = {item}/>}
        />
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
});
