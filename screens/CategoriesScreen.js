import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Colors from './constants/Colors';

import GridItemRenderer from '../components/GridItemsRenderer';
import { CATEGORIES } from './data/dummy-data';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <GridItemRenderer
                itemId={itemData.item.id}
                itemTitle={itemData.item.title}
                itemColor={itemData.item.color}
                onButtonPress={() => {
                    props.navigation.navigate('CategoryMeals', { categoryId: itemData.item.id })
                }}
            />
        )
    }

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
            keyExtractor={(item) => item.id}
        />
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meals Categories (nav options)',
    headerStyle: {
        backgroundColor: Colors.primaryColor
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
})

export default CategoriesScreen;