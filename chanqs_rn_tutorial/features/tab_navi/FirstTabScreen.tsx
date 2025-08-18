import React, { useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useScrollToTop, useFocusEffect } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { TabParamList, RootStackParamList } from '../../navigation/navigation';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'First'>,
  NativeStackScreenProps<RootStackParamList>
>;

const DATA = Array.from({ length: 50 }, (_, i) => `행 ${i + 1}`);

export default function FirstTabScreen({ navigation }: Props) {
  const listRef = useRef<FlatList<string>>(null);

  // 탭 바에서 같은 탭을 다시 누르면 자동으로 맨 위로 스크롤
  useScrollToTop(listRef);

  // 화면이 focus 될 때마다 할 일 (예: 최신 데이터 갱신)
  useFocusEffect(
    React.useCallback(() => {
      // focus 진입
      // console.log('Home focused');
      return () => {
        // blur 시
        // console.log('Home blurred');
      };
    }, [])
  );

  return (
    <FlatList
      ref={listRef}
      data={DATA}
      keyExtractor={(x) => x}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={{ padding: 16, borderBottomWidth: 1, borderColor: '#eee' }}
          onPress={() => {
            // 탭 화면에서 "스택의 다른 화면"으로 이동
            navigation.navigate('SimpleNavi');
          }}
        >
          <Text>{item}</Text>
          <Text style={{ color: '#888' }}>눌러서 Detail로 이동</Text>
        </TouchableOpacity>
      )}
      ListHeaderComponent={
        <View style={{ padding: 16 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Home</Text>
          <Text style={{ color: '#666' }}>탭 재클릭 → 맨 위로 이동</Text>
        </View>
      }
    />
  );
}