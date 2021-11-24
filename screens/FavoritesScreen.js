import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals)
    if (favMeals.length === 0) {
        return (
            <ScrollView contentContainerStyle={styles.screen}>
                <Text style={styles.text}>No favorite meals yet...</Text>
                <Image
                    resizeMode='contain'
                    style={styles.image}
                    source={{ uri: 'https://st4.depositphotos.com/1663755/24938/i/600/depositphotos_249383852-stock-photo-3d-character-wearing-chef-hat.jpg' }} />

            </ScrollView>
        )
    }
    return <MealList data={favMeals} navigation={props.navigation} />
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%'
    },
    image: {
        height: 500,
        width: '100%'
    },
    text: {
        fontSize: 35,
        color: 'rgba(100, 93, 8, 0.63)',
        fontWeight: 'bold',
        textShadowColor: 'purple',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,

    }
})

export default FavoritesScreen;