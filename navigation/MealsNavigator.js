import React from 'react';
import { View } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import { DrawerActions } from '@react-navigation/routers';

// Screens
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FilterScreen from '../screens/FiltersScreen'

import Colors from '../screens/constants/Colors';

//Nested Stack navigator
const SecondStack = createNativeStackNavigator();

const FavoritesStackNavigator = (props) => {
    return (
        <SecondStack.Navigator screenOptions={screenOptions}>
            <SecondStack.Screen name="Favorites" component={FavoritesScreen} options={{
                title: "Your favorites",
                headerLeft: () => (
                    <SimpleLineIcons
                        style={{ marginRight: 20 }}
                        name="menu"
                        size={30}
                        color="#900"
                        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
                    />
                ),
            }} />
            <SecondStack.Screen name="MealDetail" component={MealDetailScreen} />
        </SecondStack.Navigator>
    );
}

//MAIN NAVIGATOR
const Tab = createBottomTabNavigator();

const FavoriteMealsTabNavigator = () => {
    return (
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
    )
}

//NESTED Stack navigator
const Stack = createNativeStackNavigator();

const NestedStackNavigator = (props) => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Categories" component={CategoriesScreen} options={{
                headerLeft: () => (
                    <SimpleLineIcons
                        style={{ marginRight: 20 }}
                        name="menu"
                        size={30}
                        color="#900"
                        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
                    />
                ),
            }} />
            <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
    );
}

const FilterStack = createNativeStackNavigator();
const FilterStackNav = props => (
    <FilterStack.Navigator screenOptions={{
        headerTitleStyle: {
            color: 'orange',
            fontWeight: 'bold'
        },
        headerBackTitle: {
            color: 'orange',
            fontWeight: 'bold'
        },
    }}>
        <FilterStack.Screen name='FiltersScreen' component={FilterScreen} options={{
            headerLeft: () => (
                <SimpleLineIcons
                    style={{ marginRight: 20 }}
                    name="menu"
                    size={30}
                    color="#900"
                    onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
                />
            ),
            // headerRight: () => (
            //     <Ionicons
            //         {...props}
            //         style={{ marginRight: 20 }}
            //         name="save-outline"
            //         size={30}
            //         color="#900"
            //         // onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
            //         onPress={() => console.log(props.route)}
            //     />
            // ),
            title: 'Filters'
        }} />
    </FilterStack.Navigator>
)

const Drawer = createDrawerNavigator();
const DrawerNav = props => (
    <NavigationContainer>
        <Drawer.Navigator screenOptions={{
            drawerLabelStyle: { color: 'white', fontSize: 18, },
            drawerContentStyle: { backgroundColor: 'purple' },
            drawerActiveTintColor: 'blue',
            overlayColor: 'pink'

        }}>
            <Drawer.Screen name='MealsFavorites' component={FavoriteMealsTabNavigator} options={{ headerShown: false, title: 'Meals' }} />
            <Drawer.Screen name='Filters' component={FilterStackNav} options={{
                headerTitle: 'Filter Meals',
                headerShown: false,

            }} />
        </Drawer.Navigator>
    </NavigationContainer>
)

export default DrawerNav;

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