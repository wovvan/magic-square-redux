import {compose, createStore} from 'redux'
import persistState from 'redux-localstorage'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const enhancer = compose(
    persistState()
  );
  const store = createStore(rootReducer, initialState, enhancer);
  continueHidingCircle(store);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  function continueHidingCircle(store) {
    store.getState().squares.map((square) => {
      if (square.opacity > 0) {
        let timer = 12000 * square.opacity;
        let timerId = setInterval(function() {
          store.dispatch({
            type: "CHANGE_OPACITY",
            payload: {
              id: square.id,
              opacity: square.opacity - 0.25
            }
          });
        }, 3000);

        setTimeout(function() {
          clearInterval(timerId);
        }, timer);
      }
      return square;
    });
  }

  return store
}
