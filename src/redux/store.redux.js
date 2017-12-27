import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

const store = {
  configure: () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false
    }) : compose;

    const enhancer = composeEnhancers(
      applyMiddleware(thunk)
    );
    return createStore(rootReducer, enhancer);
  }
};

export default store;