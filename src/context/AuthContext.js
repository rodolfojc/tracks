import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type){
        default:
            return state;
    }
};

const signup = dispatch => {
    return ({ email, password }) => {
        // Make API request to sign up with email and password

        // If we sign up, modify our state authenticated

        // If signing up fails, reflect an error message
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