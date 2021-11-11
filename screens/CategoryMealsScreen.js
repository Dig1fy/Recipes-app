import React, { useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES } from './data/dummy-data';
import { MEALS } from './data/dummy-data'
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem
                item={itemData.item}
                onSelectMeal={() => props.navigation.navigate('MealDetail', { 'mealId': itemData.item.id })}

            />
        )
    }

    const { categoryId } = props.route.params

    // We need only the meals that belong to a certain Category (i.e. current category id is presented in the meals' categoryIds array)
    const currentMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    useEffect(() => {
        props.navigation.setOptions({
            title: props.route.params.headerTitle,
        });
    }, [props.route.params.headerTitle]);

    return (
        <View style={styles.screen}>
            <FlatList
                data={currentMeals}
                keyExtractor={(item, index) => item.id} //In newer versions of ES, the key extractor automatically extracts the ID from each object passed to data as an array
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
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