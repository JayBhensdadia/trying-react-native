import { Image, StyleSheet, Text, View } from "react-native"

interface MovieProp {
    id?: string;
    title?: string;
    date?: string;
    imgUrl?: string;
    views?: number;
    imdb?: number;
}

export const Movie = ({ id, title, date, imgUrl, views, imdb }: MovieProp) => {
    return <View style={styles.item}>

        <View>
            {/* <Image source={{ uri: imgUrl }}
                style={{ width: 100, height: 100 }}
            /> */}
            <Image source={require('@/assets/images/icon.png')} style={{ width: 100, height: 100 }} />

        </View>
        <View style={styles.details} >
            <Text style={styles.title}>{title}</Text>
            <View style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                <Text style={{ fontSize: 42 }}>{imdb}</Text>
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold' }}>{date}</Text>
                    <Text>{views}</Text>
                </View>

            </View>
        </View>

    </View>
}

const styles = StyleSheet.create({
    details: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',

    },

    item: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#ff29',
        borderWidth: 2,
        borderRadius: 10,
        borderRightWidth: 5,
        borderBottomWidth: 5,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});