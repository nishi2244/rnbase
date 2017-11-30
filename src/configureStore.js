import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import app from './reducers';
import rootSaga from './saga/index';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

export default function configureStore() {
  const store = createStore(
    app,
    applyMiddleware(...middlewares),
  );
  rootSaga.map(saga => sagaMiddleware.run(saga));
  return store;
}
