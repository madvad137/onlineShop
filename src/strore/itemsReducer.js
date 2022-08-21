
let defaultState= {
    items: []
}
const GET_ITEMS = "GET-ITEMS"

export const itemsReducer =  (state = defaultState, action) => {

    switch(action.type){
        case GET_ITEMS:
            return {...state, items:[...action.payload]}
        default:
            return state
    }
}

export const getItemsAction = (payload) => {
    return {type: GET_ITEMS, payload}
}


