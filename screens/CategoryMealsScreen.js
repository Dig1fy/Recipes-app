import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {

    const { categoryId } = props.route.params
    const allFilteredMeals = useSelector(state => state.meals.filteredMeals)

    const currentMeals = allFilteredMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    useEffect(() => {
        props.navigation.setOptions({
            title: props.route.params.headerTitle,
        });
    }, [props.route.params.headerTitle]);

    // MealsList does not have access to the navigations props so we need to pass it explicitly
    return <MealList data={currentMeals} navigation={props.navigation} />
}

export default CategoryMealsScreen;