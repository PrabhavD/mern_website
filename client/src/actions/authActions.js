import axios from 'axios';
import { returnErrors } from './errorActions';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types"

//Check token and load user
export const loadUser = () => (dispatch, getState) => {
    //User loading 
    dispatch({ type: USER_LOADING });

    //Get token from local storage
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    //If token, add to headers
    if(token) {
        config.headers['x-auth-token'] = token;
    }

    axios.get('/api/auth/user', config)
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data //object with user object and token itself
        }))
        .catch(err => {
            dispatch(returnErrors);
            dispatch({
                type: AUTH_ERROR
            })
        })
}