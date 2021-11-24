import { MEALS } from "../../screens/data/dummy-data";
import { TOGGLE_FAVORITE_MEAL } from "../actions/meals";


const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE_MEAL:
            // Check if the meal is already in favorites
            const mealIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            // We should not operate with the original state
            const updatedFavoriteMeals = [...state.favoriteMeals];

            if (mealIndex >= 0) {
                updatedFavoriteMeals.splice(mealIndex, 1);
                return { ...state, favoriteMeals: updatedFavoriteMeals }
            } else {
                const meal = state.meals.find(m => m.id === action.mealId);
                updatedFavoriteMeals.push(meal)
                return { ...state, favoriteMeals: updatedFavoriteMeals }
            }

        default:
            return state;
    }
}

export default mealsReducer;