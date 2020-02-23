import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type){
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
            console.log(err.message)
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
    { isSignedIn: false }
);