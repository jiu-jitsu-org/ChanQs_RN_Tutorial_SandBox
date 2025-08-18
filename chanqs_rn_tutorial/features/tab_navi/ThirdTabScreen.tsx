import React, { useRef } from 'react';
import { View, Text, Switch } from 'react-native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { TabParamList, RootStackParamList } from '../../navigation/navigation';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Third'>,
  NativeStackScreenProps<RootStackParamList>
>;

const DATA = Array.from({ length: 50 }, (_, i) => `행 ${i + 1}`);

export default function ThirdTabScreen({ navigation }: Props) {
  const [dark, setDark] = React.useState(false);
  return (
    <View style={{ padding: 16, gap: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>설정</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Text>다크 모드</Text>
        <Switch value={dark} onValueChange={setDark} />
      </View>
    </View>
  );

}