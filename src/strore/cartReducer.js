const defaultState = {
    cartItems: []
}


const GET_CART = "GET-CART"

export const cartReducer = (state = defaultState, action) => {

    switch(action.type){
        case GET_CART :
            return {...state, cartItems:[...action.payload]}
        default:
            return state 
    }
}

export const getCartAction = (payload) => {
    return {type: GET_CART, payload}
}



