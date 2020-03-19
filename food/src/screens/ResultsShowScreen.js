import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');


    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>{result.name}</Text>
            <FlatList
                style={{ marginBottom: 30 }}
                showsVerticalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo) => { photo }}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
    },
    image: {
        height: 200, width: 400,
        marginVertical: 10
    }
});

export default ResultsShowScreen;