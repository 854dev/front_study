import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import ReduxThunk from 'redux-thunk';
import reducers from './index';

const composeEnhancers = composeWithDevTools({});

const middlewares = [ReduxThunk];

const configure = () =>
  createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

export default configure;
