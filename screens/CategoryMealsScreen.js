import React, { useEffect } from 'react';

import { MEALS } from './data/dummy-data'
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {

    const { categoryId } = props.route.params

    // We need only the meals that belong to a certain Category (i.e. current category id is presented in the meals' categoryIds array)
    const currentMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    useEffect(() => {
        props.navigation.setOptions({
            title: props.route.params.headerTitle,
        });
    }, [props.route.params.headerTitle]);

    // MealsList does not have access to the navigations props so we need to pass it explicitly
    return <MealList data={currentMeals} navigation={props.navigation} />
}

export default CategoryMealsScreen;