import React, { useCallback, useMemo } from "react"
import { View, Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../navigation/navigation";

type Props = NativeStackScreenProps<RootStackParamList, 'TapNavi'>;

export default function TapNaviScreen({ navigation }: Props) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>TapNaviScreen</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
            <Button title="Replace to Home" onPress={() => navigation.replace('Home')} />
        </View>
    );
}