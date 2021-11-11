import React from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet
} from 'react-native';
import MealItem from './MealItem';


const MealList = props => {
    console.log(props)
    const renderMealItem = itemData => {
        return (
            <MealItem
                item={itemData.item}
                onSelectMeal={() => props.navigation.navigate('MealDetail', { 'mealId': itemData.item.id })}
            />
        )
    }

    return (
        <FlatList
            data={props.data}
            keyExtractor={(item, index) => item.id} //In newer versions of ES, the key extractor automatically extracts the ID from each object passed to data as an array
            renderItem={renderMealItem}
            style={{ width: '100%' }}
        />
    );
}

export default MealList;
