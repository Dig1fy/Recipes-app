import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MEALS } from './data/dummy-data';

const MealDetailScreen = props => {

    const mealId = props.route.params.mealId
    // props.navigation.setOptions({
    //     title: `Your Updated Title`,
    // })
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    useEffect(() => {
        props.navigation.setOptions({
            title: selectedMeal.title,
        });
    }, [selectedMeal.title]);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button
                title="Go back to meals"
                onPress={() => props.navigation.goBack()}
            />
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

export default MealDetailScreen;