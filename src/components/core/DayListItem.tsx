import { Text, View, StyleSheet, Pressable} from 'react-native';
import { Link } from 'expo-router';

type DayListItem = {
  day: number;
}

export default function DayListItem({ day }: DayListItem) {
    return(
    // With the 'asChild' property the object won't mess up the styles
    <Link href = {`/(days)/day${day}`} asChild> 
      <Pressable style = {styles.box}>
          <Text style = {styles.text}>{day}</Text>
      </Pressable>
    </Link>
    );
}

const styles = StyleSheet.create({
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
      fontSize: 70,
      fontFamily: 'AmaticBold' // We specify the font with the fontFamily property
    }
  });