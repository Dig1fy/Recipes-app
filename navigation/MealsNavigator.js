import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Colors from '../screens/constants/Colors';

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Categories" component={CategoriesScreen} />
                <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
                <Stack.Screen name="MealDetail" component={MealDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

//setting common screen options between the screens
const screenOptions = {
    headerStyle: { backgroundColor: Colors.primaryColor },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}

export default MealsNavigator;