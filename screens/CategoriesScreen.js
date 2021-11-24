import React from 'react';
import {
    StyleSheet,
    FlatList
} from 'react-native';

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
                    props.navigation.navigate('CategoryMeals', { categoryId: itemData.item.id, headerTitle: itemData.item.title })
                }}
            />
        )
    }

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
            style={{ overflow: 'hidden', }}
            keyExtractor={(item) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default CategoriesScreen;