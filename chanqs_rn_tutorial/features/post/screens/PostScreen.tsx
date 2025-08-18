import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { usePostStore } from '../store/postStore';
import { usePosts } from '../hooks/usePosts';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Post'>;

export default function PostScreen({ navigation }: Props) {
    const { posts, isLoading } = usePostStore();
    const { loadPosts } = usePosts();

    useEffect(() => {
        loadPosts();
    }, []);

    if (isLoading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>{item.body}</Text>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    item: { padding: 16, borderBottomWidth: 1, borderColor: '#ccc' },
    title: { fontWeight: 'bold' },
})