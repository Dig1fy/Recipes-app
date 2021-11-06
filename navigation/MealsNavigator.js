// import { createStackNavigator, createAppContainer } from "react-navigation";
// // import { createStackNavigator, createAppContainer } from 'react-navigation';
// // import { createAppContainer } from 'react-navigation';
// // import { createStackNavigator } from 'react-navigation-stack';

// import CategoriesScreen from '../screens/CategoriesScreen'
// import CategoryMealsScreen from '../screens/CategoryMealsScreen'
// import MealDetailScreen from '../screens/MealDetailScreen'

// const MealsNavigator = createStackNavigator({
//     Categories: {
//         screen: CategoriesScreen
//     },
//     CategoryMeals: {
//         screen: CategoryMealsScreen
//     },
//     MealsDetails: {
//         screen: MealDetailScreen
//     }
// })

// export default createAppContainer(MealsNavigator)

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={CategoriesScreen} />
                <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
                <Stack.Screen name="MealDetail" component={MealDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MealsNavigator;