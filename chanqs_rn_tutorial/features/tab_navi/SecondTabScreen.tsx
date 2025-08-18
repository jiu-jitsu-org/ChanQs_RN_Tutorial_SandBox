import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { TabParamList, RootStackParamList } from '../../navigation/navigation';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Second'>,
  NativeStackScreenProps<RootStackParamList>
>;

const DATA = Array.from({ length: 50 }, (_, i) => `행 ${i + 1}`);

export default function SecondTabScreen({ navigation }: Props) {
  const [q, setQ] = React.useState('');

  // TabNavigator에서 listeners.tabPress에서 막거나, 허용할 수 있음.
  // 여기서는 단순 UI 예시: 검색어 입력 후 버튼으로 동작. 
  return (
    <View style={{ padding: 16, gap: 12 }}>
      <TextInput
        value={q}
        onChangeText={setQ}
        placeholder="검색어"
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8 }}
      />
      <Button title="검색 실행" onPress={() => console.log('search:', q)} />
      <Button title="검색어 초기화" onPress={() => setQ('')} />
    </View>
  );

}