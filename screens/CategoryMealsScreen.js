import React, { useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES } from './data/dummy-data';
import { MEALS } from './data/dummy-data'
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {

    const { categoryId } = props.route.params

    // We need only the meals that belong to a certain Category (i.e. current category id is presented in the meals' categoryIds array)
    const currentMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    useEffect(() => {
        props.navigation.setOptions({
            title: props.route.params.headerTitle,
        });
    }, [props.route.params.headerTitle]);

    return ( // MealsList does not have access to the navigations props so we need to pass it explicitly
        <View style={styles.screen}>
            <MealList data={currentMeals} navigation={props.navigation} />
            <Button title="Go to Categories" onPress={() => props.navigation.navigate('Categories')} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CategoryMealsScreen;