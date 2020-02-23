import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {... state, errorMessage: action.payload};
        default:
            return state;
    }
};

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerAPI.post('/signup', {email, password});
            console.log(response.data);
        } catch (err) {
            dispatch({type: 'add_error', payload: 'Somenthing when wrong! Try Again'})
        }
    };
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
    { isSignedIn: false, errorMessage:'' }
);