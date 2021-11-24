export const TOGGLE_FAVORITE_MEAL = 'TOGGLE_FAVORITE_MEAL'
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavoriteMeal = (id) => {
    return {
        type: TOGGLE_FAVORITE_MEAL, mealId: id
    }
}

export const setFilters = filterSettings => {
    return {
        type: SET_FILTERS, filters: filterSettings
    }
}