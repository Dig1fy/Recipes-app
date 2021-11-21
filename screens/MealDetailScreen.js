import React, { useEffect } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
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
        <ScrollView style={{ height: '100%', flex: 1, flexGrow: 1 }}>
            <View style={styles.screen}>
                <Image
                    source={{ uri: selectedMeal.imageUrl }}
                    style={styles.image}
                // resizeMode="contain"
                />
                <View style={styles.info}>
                    <Text style={styles.text}>{selectedMeal.duration}m</Text>
                    <Text style={styles.text}>{selectedMeal.complexity}</Text>
                    <Text style={styles.text}>{selectedMeal.affordability}</Text>
                </View>
                <View style={styles.headersContainer}>
                    <Text style={styles.headTitle}>INGREDIENTS</Text>
                </View>
                {selectedMeal.ingredients.map(ingredient => <Text style={styles.ingredient} key={ingredient}>*  {ingredient}</Text>)}
                <View style={styles.headersContainer}>
                    <Text style={styles.headTitle}>STEPS</Text>
                </View>
                {selectedMeal.steps.map(step => <Text style={styles.ingredient} key={step}>-  {step}</Text>)}
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexGrow: 1,
        height: 700,
        width: '100%',
        // alignItems: 'center',
        backgroundColor: 'rgba(5, 2, 4, 0.03)',
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        overflow: 'hidden',
        paddingBottom: 5,
        width: '100%'
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        opacity: 0.7,
        paddingHorizontal: 5,
    },
    headTitle: {
        fontSize: 25,
        alignSelf: 'center'
    },
    image: {
        width: '100%',
        height: 300,
    },
    ingredient: {
        paddingLeft: 5,
        textShadowColor: 'brown',
        fontSize: 16,
    },
    headersContainer: {
        backgroundColor: 'rgba(161, 130, 3, 0.45)',
        marginVertical: 10
    }
})

export default MealDetailScreen;