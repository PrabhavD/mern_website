import { v4 as uuid } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        {id: uuid(), name: 'Math 115'},
        {id: uuid(), name: 'ECE 190'},
        {id: uuid(), name: 'ARTS 190'},
        {id: uuid(), name: 'MATH 117'}
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state    //change after fetch from API
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default: 
            return state;
    }
};