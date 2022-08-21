import axios from 'axios'
import { getCartAction } from '../strore/cartReducer'

export const asyncGetCart = () =>{
    return (dispatch) =>{
        axios.get('https://62ebb3a155d2bd170e743ed0.mockapi.io/cart')
        .then((response) => {
            dispatch(getCartAction(response.data))
        })
    }
}