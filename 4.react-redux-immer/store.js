const { createStore, compose, applyMiddleware } = require('redux');
const { composeWithDevTools } = require('redux-devtools-extension');

const reducer = require('./reducers');
const { addPost } = require('./actions/post');
const { logIn, logOut } = require('./actions/user');

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

const firstMiddleware = (store) => (next) => (action) => {
  console.log('로깅', action);
  next(action);
};

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') { // 비동기
    return action(store.dispatch, store.getState);
  }
  return next(action); // 동기
};


const enhancer = process.env.NODE_ENV === 'production'
  ? compose(
    applyMiddleware(
      firstMiddleware,
      thunkMiddleware,
    ),
  )
  : composeWithDevTools(
    applyMiddleware(
      firstMiddleware,
      thunkMiddleware,
    ),
  );

const store = createStore(reducer, initialState, enhancer);

module.exports = store;
