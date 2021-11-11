import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from './data/dummy-data';
import CustomHeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {

    const mealId = props.route.params.mealId
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    useEffect(() => {
        props.navigation.setOptions({
            title: selectedMeal.title,
        });
    }, [selectedMeal.title]);

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Favorites" color='yellow' iconName="ios-star" onPress={() => alert('FAAAAV')} />
                </HeaderButtons>
            ),
        });
    }, [props.navigation]);


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