import React from 'react';
import { Alert, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { TabParamList } from '../navigation/navigation';
import FirstTabScreen from '../features/tab_navi/FirstTabScreen';
import SecondTabScreen from '../features/tab_navi/SecondTabScreen';
import ThirdTabScreen from '../features/tab_navi/ThirdTabScreen';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName='Second'
            screenOptions={{
                headerTitleAlign: 'center',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarLabelStyle: { fontSize: 12 },
            }}
        >
            <Tab.Screen
                name="First"
                component={FirstTabScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Text style={{ fontSize: size, color }}>{'🏠'}</Text>
                    ),
                }}
                // 탭 버튼을 눌렀을 때 처리 (탭 전환 직전)
                listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        // 예) 홈 탭을 두 번 연속 누르면(동일 탭) 스크롤 맨 위로 이동하도록
                        // -> 실제 스크롤 로직은 화면에서 useScrollToTop 으로 처리 (아래 예시)
                        // 여기서는 단순 로깅/알림 예시
                        // console.log('Home tab pressed', route.name);
                    },
                })}
            />

            <Tab.Screen
                name="Second"
                component={SecondTabScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Text style={{ fontSize: size, color }}>{'🔎'}</Text>
                    )
                }}
                listeners={{
                    tabPress: (e) => {
                        // 예) 특정 조건일 때 탭 전환 막기
                        const mustLogin = false; // 예시
                        if (mustLogin) {
                            e.preventDefault();           // 기본 전환 막기
                            Alert.alert('로그인이 필요합니다');
                        }
                    },
                }}
            />

            <Tab.Screen
                name="Third"
                component={ThirdTabScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Text style={{ fontSize: size, color }}>{'⚙️'}</Text>
                    )
                }}
            />
        </Tab.Navigator>
    );
}
