import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { CATEGORIES } from './data/dummy-data';

const CategoryMealsScreen = (props) => {
    const { categoryId } = props.route.params
    const selectedCategory = CATEGORIES.find(c => c.id == categoryId)
    // props.navigation.setOptions({ headerTitle: selectedCategory.title })

    return (
        <View style={styles.screen}>
            <Text>The CategoryMealsScreen</Text>
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