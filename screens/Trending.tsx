import { Movie } from '@/components/Movie'
import { movies } from '@/constants/movies'
import React from 'react'
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'



const TrendingScreen = () => {
    return (
        <SafeAreaView style={styles.container}>

            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24, paddingBottom: 10 }}>Trending</Text>

            <FlatList
                data={movies}
                renderItem={({ item }) => <Movie title={item.title} date={item.date} imdb={item.imdb} views={item.views} imgUrl={item.imgUrl} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: (StatusBar.currentHeight! + 20) || 0,
        marginHorizontal: 20
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default TrendingScreen