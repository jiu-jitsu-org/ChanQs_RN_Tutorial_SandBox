import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "./navigation";
import HomeScreen from "../features/home/HomeScreen";
import SimpleNaviScreen from "../features/simple_navi/SimpleNaviScreen";
import TabNavigator from "./TabNavigator";
import PostScreen from "../features/post/screens/PostScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitleAlign: 'center',
                headerShown: true,
                headerBackButtonDisplayMode: 'minimal'      // iOS에서 뒤로가기 Title 숨김
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: '' }}
            />
            <Stack.Screen
                name="SimpleNavi"
                component={SimpleNaviScreen}
                options={{ title: '' }}
            />
            <Stack.Screen
                name="TapNavi"
                component={TabNavigator}
                options={{ title: '' }}
            />
            <Stack.Screen
                name="Post"
                component={PostScreen}
                options={{ title: '' }}
            />

        </Stack.Navigator>
    )
}