import { REDUX_RESIZE, REDUX_RESIZE_END } from './actions';

const defaultBreakPoints = [
    { width1: 0, width2: 576, device: 'xs' },
    { width1: 576, width2: 768, device: 'sm' },
    { width1: 768, width2: 992, device: 'md' },
    { width1: 992, width2: 1200, device: 'lg' },
    { width1: 1200, width2: 5000, device: 'xl' },
];

const isClient = () => {
    if (typeof window !== 'undefined' && document !== undefined) {
        return true;
    }

    return false;
};

const getWidth = () => {
    const w = window;
    const d = document;
    const { documentElement } = d;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;

    return width;
};

const decideMediaType = (breakPoints) => {
    const width = getWidth();
    let device = 'xl';

    const bps = breakPoints === null || breakPoints === undefined
        ? defaultBreakPoints
        : breakPoints;

    for (let i = 0; i < bps.length; i++) {
        if (width >= bps[i].width1 && width < bps[i].width2) {
            device = bps[i].device;
        }
    }

    return { width, screen: device };
};

const updateDimensions = (store, action, breakPoints) =>
    store.dispatch({
        type: REDUX_RESIZE_END,
        payload: decideMediaType(breakPoints),
    });


export default function reduxResize(breakPoints) {
    return store => next => (action) => {
        if (action.type !== REDUX_RESIZE || !isClient()) {
            return next(action);
        }
        updateDimensions(store, action, breakPoints);

        next(action);
    };
}
