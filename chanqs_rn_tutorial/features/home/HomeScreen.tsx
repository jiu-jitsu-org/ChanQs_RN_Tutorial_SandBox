import React, { useCallback, useMemo } from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../navigation/navigation";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

type ScreenData = { title: string, id: string, route: string }

const SCREENLIST: ScreenData[] = [
    { route: "SimpleNavi", title: "Stack Navigation Screen", id: "0" },
    { route: "TapNavi", title: "Tab Navigation Screen", id: "1" },
    { route: "Post", title: "Call REST API", id: "2" }
]

function HomeRow({ screenData, onPress }: { screenData: ScreenData, onPress: (screenData: ScreenData) => void }) {
    return (
        <TouchableOpacity
            style={{ padding: 16, borderBottomWidth: 1, borderColor: '#eee' }}
            onPress={() => onPress(screenData)}
        >
            <Text>{screenData.title}</Text>
        </TouchableOpacity>
    )
}

export default function HomeScreen({ navigation }: Props) {
    const keyExtractor = useCallback((item: ScreenData) => item.id, []);
    const onPressItem = useCallback((data: ScreenData) => {
        console.log('pressed', data.title);
        switch (data.route) {
            case "TapNavi":
            case "SimpleNavi":
            case "Post":
                navigation.navigate(data.route);
                break;
        }

    }, []);

    const ItemSeparator = useMemo(
        () => () => <View style={{ height: 8 }} />,
        []);

    const renderItem = useCallback(
        ({ item }: { item: ScreenData }) => <HomeRow screenData={item} onPress={onPressItem} />,
        [onPressItem]
    );

    return (
        <FlatList<ScreenData>
            data={SCREENLIST}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={<Text style={{ padding: 16, fontWeight: 'bold' }}>HomeList</Text>}
            ListEmptyComponent={<Text style={{ padding: 16 }}>No users</Text>}
            contentContainerStyle={{ paddingVertical: 8 }}
        />
    )
}
