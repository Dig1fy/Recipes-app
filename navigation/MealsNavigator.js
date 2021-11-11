import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import Colors from '../screens/constants/Colors';

//NESTED NAVIGATOR
const Tab = createBottomTabNavigator();

const FavoriteMealsTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{}}>
                <Tab.Screen name='Meals' component={NestedStackNavigator} options={{ headerShown: false }}
                    options={() => ({
                        tabBarIcon: ({ color, size }) => {
                            let iconName = 'ios-restaurant'
                            // We can return any component that here!
                            return <Ionicons name={iconName} size={25} color={color} />;
                        },
                        tabBarActiveTintColor: 'yellow',
                        tabBarInactiveTintColor: 'gray',
                        tabBarActiveBackgroundColor: 'purple',
                        tabBarLabelStyle: tabBarLabelStyle
                    })}
                />
                <Tab.Screen name='Favorites' component={FavoritesScreen}
                    options={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName = 'star-half-outline'
                            // We can return any component that here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'yellow',
                        tabBarInactiveTintColor: 'gray',
                        tabBarActiveBackgroundColor: 'purple',
                        tabBarLabelStyle: tabBarLabelStyle
                    })}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

//MAIN NAVIGATOR
const Stack = createNativeStackNavigator();

const NestedStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
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

const tabBarLabelStyle = {
    fontSize: 19,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: undefined, height: 1 },
    textShadowRadius: 1,
    opacity: 0.9
}

export default FavoriteMealsTabNavigator;