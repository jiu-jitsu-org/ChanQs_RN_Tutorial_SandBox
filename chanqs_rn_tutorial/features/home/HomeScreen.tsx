import React, { useCallback, useMemo } from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../navigation/navigation";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

type ScreenData = { title: string, id: string }

const SCREENLIST: ScreenData[] = [
    { title: "SimpleNavi", id: "0" },
    { title: "TapNavi", id: "1" }
]

function HomeRow({ screenData, onPress } : { screenData:ScreenData, onPress:(screenData: ScreenData) => void} ) {
    return(
        <TouchableOpacity
        style={{ padding:16, borderBottomWidth:1, borderColor:'#eee' }}
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
        switch (data.title) {
            case "TapNavi":
            case "SimpleNavi":
                navigation.navigate(data.title);
                break;
        }
        
    }, []);

    const ItemSeparator = useMemo(
    () => () => <View style={{ height: 8 }} />, 
    []);

    const renderItem = useCallback(
        ({ item } : { item : ScreenData}) => <HomeRow screenData={item} onPress={onPressItem} />, 
        [onPressItem]
    );

    return(
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
