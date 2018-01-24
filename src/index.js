import ReduxResize from './middleware';
import ResizeReducer from './reducer';
import { ResizeComponent as ConnectedResize } from './resizeComponent';
import { ResizeWrapper } from './resizeWrapper';
import { REDUX_RESIZE, REDUX_RESIZE_END } from './actions';

export {
    REDUX_RESIZE,
    REDUX_RESIZE_END,
    ResizeReducer,
    ConnectedResize,
    ResizeWrapper,
};
export default ReduxResize;
