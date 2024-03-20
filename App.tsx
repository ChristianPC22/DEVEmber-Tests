import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import DayListItem from './src/components/core/DayListItem';

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// 
SplashScreen.preventAutoHideAsync();

// We have an array with rest parameters (24), then iterate through every element and adding 1 to the index 
const days = [...Array(24)].map((val, index) => index + 1);

// Parent component
export default function App() {
  {/* Inside the array we create the variables fontsLoaded and fontError, using the map 'useFonts' we specify the key and the value of the fonts we want to load */}
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError])

  {/* If the fonts weren't loaded and there's no errors, we return a simple charge animation until the fonts are charged */}
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style = {styles.container}>
      <FlatList
        data = {days}
        contentContainerStyle = {styles.content}
        columnWrapperStyle = {styles.column}
        numColumns = {2}
        renderItem = {({ item }) => <DayListItem day   = {item}/>}
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
