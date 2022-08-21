import axios from 'axios'
import { getItemsAction } from '../strore/itemsReducer'

export const  asyncGetItems = () => {
    return (dispatch) =>{
        axios.get('https://62ebb3a155d2bd170e743ed0.mockapi.io/items')
        .then((response) => {
            dispatch(getItemsAction(response.data))
        })
    }
}