import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals)
    return <MealList data={favMeals} navigation={props.navigation} />
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default FavoritesScreen;