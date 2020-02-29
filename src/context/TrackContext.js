import createDataContext from '../context/createDataContext';

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const fetchTracks = dispatch = () => {};
const createTracks = dispatch = () => {};

export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTracks, createTracks },
    []
);
