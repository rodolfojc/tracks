import createDataContext from '../context/createDataContext';

const locationReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const startRecording = dispatch => () => {};
const stockRecording = dispatch => () => {};
const addLocation = dispatch => () => {};

export const { Context, Provider } = createDataContext (
    locationReducer,
    {startRecording, stockRecording, addLocation},
    { recording: false, locations: [], currentLocation: null}
);