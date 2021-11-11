import React from 'react';
import { StyleSheet } from 'react-native';

import MealList from '../components/MealList';
import { MEALS } from './data/dummy-data';

const FavoritesScreen = props => {

    return <MealList data={MEALS} navigation={props.navigation} />
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default FavoritesScreen;