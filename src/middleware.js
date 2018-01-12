import { REDUX_RESIZE, REDUX_RESIZE_END } from "./actions";

const reduxResize = store => next => action => {
  if (action.type !== REDUX_RESIZE || !isClient()) {
    return next(action);
  }
  updateDimensions(store, action);

  next(action);
};

const updateDimensions = (store, action) => {
  return store.dispatch({
    type: REDUX_RESIZE_END,
    payload: decideSize()
  });
};

const decideSize = () => {
  const width = getWidth();
  if (width < 576) {
    return { width: width, screen: "xs" };
  } else if (width >= 576 && width < 768) {
    return { width: width, screen: "sm" };
  } else if (width >= 768 && width < 992) {
    return { width: width, screen: "md" };
  } else if (width >= 992 && width < 1200) {
    return { width: width, screen: "lg" };
  } else {
    return { width: width, screen: "xl" };
  }
};

const getWidth = () => {
  const w = window;
  const d = document;
  const { documentElement } = d;
  const body = d.getElementsByTagName("body")[0];
  const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;

  return width;
};

const isClient = () => {
  if (typeof window !== undefined && document !== undefined) {
    return true;
  }

  return false;
};

export default reduxResize;
