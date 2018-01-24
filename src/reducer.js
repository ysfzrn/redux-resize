import { REDUX_RESIZE_END } from './actions';

const initialState = {
    device: null,
    screenWidth: null,
};

export default function resizeReducer(
    state = initialState,
    { type, payload } = {},
) {
    if (type === REDUX_RESIZE_END) {
        return {
            ...state,
            device: payload.screen,
            screenWidth: payload.width,
        };
    }

    return state;
}
