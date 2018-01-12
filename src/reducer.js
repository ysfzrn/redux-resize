import { REDUX_RESIZE_END } from './actions';

const initialState = {
    screenSize: null,
    screenWidth: null,
};

export default function resizeReducer(
    state = initialState,
    { type, payload } = {},
) {
    if (type === REDUX_RESIZE_END) {
        return {
            ...state,
            screenSize: payload.screen,
            screenWidth: payload.width,
        };
    }

    return state;
}
