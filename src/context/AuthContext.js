import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {... state, errorMessage: action.payload};
        case 'signup':
            return { errorMessage:'' , token: action.payload};
        default:
            return state;
    }
};

const signup = dispatch => async ({ email, password }) => {
        try {
            const response = await trackerAPI.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'singup', payload: response.data.token });
            
            navigate('TrackList');
        } catch (err) {
            dispatch({type: 'add_error', payload: 'Somenthing when wrong! Try Again'})
        }
    };

const signin = dispatch => {
    return() => {
        // Try to signin

        // Handle sucess by updating state

        // Handle failure by showing error message (somehow)
    };
};

const signout = dispatch => {
    return() => {
        // Somehow sign out!!
    };
};

export const { Context, Provider } = createDataContext (
    authReducer,
    { signup, signin, signout},
    { token: null, errorMessage:'' }
);