import React from 'react';
import {
    Text,
    Button,
    View,
    FlatList,
    StyleSheet
} from 'react-native';
import MealItem from './MealItem';


const MealList = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem
                item={itemData.item}
                onSelectMeal={() => props.navigation.navigate('MealDetail', { 'mealId': itemData.item.id })}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={props.data}
                keyExtractor={(item, index) => item.id} //In newer versions of ES, the key extractor automatically extracts the ID from each object passed to data as an array
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default MealList;
