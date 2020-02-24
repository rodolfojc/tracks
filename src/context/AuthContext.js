import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {... state, errorMessage: action.payload};
        case 'signin':
            return { errorMessage:'' , token: action.payload};
        case 'clean_error_message':
            return {... state, errorMessage: ''};
        default:
            return state;
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clean_error_message'});
};

const signup = dispatch => async ({ email, password }) => {
        try {
            const response = await trackerAPI.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token });
            
            navigate('TrackList');
        } catch (err) {
            dispatch({
                type: 'add_error', 
                payload: 'Somenthing when wrong! Try Again'
            });
        }
    };

const signin = dispatch => async ({ email, password }) => {
        try {
            const response = await trackerAPI.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token });

            navigate('TrackList');
        } catch (erro) {
            dispatch({
                type: 'add_error', 
                payload: 'Somenthing when wrong signing in! Try Again'
            });
        }
    };


const signout = dispatch => {
    return() => {
        // Somehow sign out!!
    };
};

export const { Context, Provider } = createDataContext (
    authReducer,
    { signup, signin, signout, clearErrorMessage},
    { token: null, errorMessage:'' }
);