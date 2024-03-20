import { Stack } from "expo-router";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { useEffect } from 'react';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';

import * as SplashScreen from 'expo-splash-screen';

// Makes the native splash screen (configured in app.json) remain visible until hideAsync is called.
SplashScreen.preventAutoHideAsync();

export default function RootLayout(){

    // Inside the array we create the variables fontsLoaded and fontError, using the map 'useFonts' we specify the key and the value of the fonts we want to load
    const [fontsLoaded, fontError] = useFonts({
        Inter: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
    });

    // Hook that will be called if one of the varibles in the array changes
    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError])

    // If the fonts weren't loaded and there's no errors, we return a simple charge animation until the fonts are charged
    if (!fontsLoaded && !fontError) {
        return null;
    }

    return <Stack screenOptions = {{}}>
        {/* With this we indicate  the title of all components */}
        <Stack.Screen name = 'index' options = {{ title: 'DEVEmber-test'}}/>
    </Stack>
}