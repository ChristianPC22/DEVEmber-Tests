import { Stack } from "expo-router";

export default function RootLayout(){
    return <Stack screenOptions = {{}}>
        {/* With this we indicate  the title of all components */}
        <Stack.Screen name = 'index' options = {{ title: 'DEVEmber-test'}}/>
    </Stack>
}