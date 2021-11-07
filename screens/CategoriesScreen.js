import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import { CATEGORIES } from './data/dummy-data';

const CategoriesScreen = props => {

    const renderGridItem = itemData => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                    props.navigation.navigate('CategoryMeals')
                }}>
                <View >
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
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
        backgroundColor: 'red'
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 120,
    }
})

export default CategoriesScreen;