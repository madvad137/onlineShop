import axios from 'axios'
import { getFavoritesAction } from '../strore/favoriteReducer'

export const asyncGetFavorites = () =>{
    return (dispatch) =>{
        axios.get('https://62ebb3a155d2bd170e743ed0.mockapi.io/favorites')
        .then((response) => {
            dispatch(getFavoritesAction(response.data))
        })
    }
}