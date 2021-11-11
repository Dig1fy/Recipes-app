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

//Nested Stack navigator
const SecondStack = createNativeStackNavigator();

const FavoritesStackNavigator = () => {
    return (
        <SecondStack.Navigator screenOptions={screenOptions}>
            <SecondStack.Screen name="Favorites" component={FavoritesScreen} options={{ title: "Your favorites" }} />
            <SecondStack.Screen name="MealDetail" component={MealDetailScreen} />
        </SecondStack.Navigator>
    );
}

//MAIN NAVIGATOR
const Tab = createBottomTabNavigator();

const FavoriteMealsTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name='Meals' component={NestedStackNavigator}
                    options={() => ({
                        tabBarIcon: ({ color, size }) => {
                            let iconName = 'ios-restaurant'
                            // We can return any component here!
                            return <Ionicons name={iconName} size={25} color={color} />;
                        },
                        tabBarActiveTintColor: 'yellow',
                        tabBarInactiveTintColor: 'gray',
                        tabBarActiveBackgroundColor: Colors.primaryColor,
                        tabBarInactiveBackgroundColor: Colors.primaryColor,
                        tabBarLabelStyle: tabBarLabelStyle
                    })}
                />
                <Tab.Screen name='FavStackNavigator' component={FavoritesStackNavigator}
                    options={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName = 'star-half-outline'
                            // We can return any component that here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        title: "Favorites",
                        headerShown: false,
                        tabBarActiveTintColor: 'yellow',
                        tabBarInactiveTintColor: 'gray',
                        tabBarActiveBackgroundColor: Colors.primaryColor,
                        tabBarInactiveBackgroundColor: Colors.primaryColor,
                        tabBarLabelStyle: tabBarLabelStyle,
                    })}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

//NESTED Stack navigator
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