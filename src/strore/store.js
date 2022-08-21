import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { itemsReducer } from "./itemsReducer";
import { cartReducer } from "./cartReducer";
import { favoriteReducer } from "./favoriteReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    items: itemsReducer,
    cart: cartReducer,
    favorite: favoriteReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))



export default store