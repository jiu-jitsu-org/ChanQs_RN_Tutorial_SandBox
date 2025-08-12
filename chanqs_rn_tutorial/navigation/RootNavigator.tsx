import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "./navigation";
import HomeScreen from "../features/home/HomeScreen";
import SimpleNaviScreen from "../features/simple_navi/SimpleNaviScreen";
import TabNaviScreen from "../features/tab_navi/TabNaviScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    return(
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerTitleAlign:'center' }}
        >
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'HomeScreen'}}/>
            <Stack.Screen name="SimpleNavi" component={SimpleNaviScreen} />
            <Stack.Screen name="TapNavi" component={TabNaviScreen} />

        </Stack.Navigator>
    )
}