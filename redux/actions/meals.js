export const TOGGLE_FAVORITE_MEAL = 'TOGGLE_FAVORITE_MEAL'

export const toggleFavoriteMeal = (id) => {
    return {
        type: TOGGLE_FAVORITE_MEAL, mealId: id
    }
}