const defaultState = {
    favoriteItems: []
}

const GET_FAVORITES = "GET-FAVORITES"

export const favoriteReducer = (state = defaultState, action) => {

    switch(action.type){
        case GET_FAVORITES :
            return {...state, favoriteItems:[...action.payload]}
        default:
            return state
    }
}

export const getFavoritesAction = (payload) => {
    return {type: GET_FAVORITES, payload}
}


