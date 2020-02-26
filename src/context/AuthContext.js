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
        case 'signout':
            return { token: null, errorMessage: ''};
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token});
        navigate('TrackList');
    } else {
        navigate('Signin');
    }
}

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


const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: signout });
    navigate('loginFlow');
};


export const { Context, Provider } = createDataContext (
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin},
    { token: null, errorMessage:'' }
);