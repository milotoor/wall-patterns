import { createStore } from 'redux';

/** Events */
export const UPDATE_HOST    = 'updateHost';
export const UPDATE_PATTERN = 'updatePattern';
export const UPDATE_PORT    = 'updatePort';


const initialState = {
    host: 'localhost',
    pattern: null,
    port: 7890
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_HOST:
            return { ...state, host: action.host };
        case UPDATE_PATTERN:
            return { ...state, pattern: action.pattern };
        case UPDATE_PORT:
            return { ...state, port: action.port };
        default:
            return state;
    }
};

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
