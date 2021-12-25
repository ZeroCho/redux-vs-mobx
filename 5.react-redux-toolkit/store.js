const { configureStore } = require('@reduxjs/toolkit');

const reducer = require('./reducers');

const firstMiddleware = () => (next) => (action) => {
  console.log('로깅', action);
  next(action);
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(firstMiddleware),
});

module.exports = store;
