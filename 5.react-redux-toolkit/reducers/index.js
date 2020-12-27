const { combineReducers } = require('redux');
const userSlice = require('./userSlice');
const postSlice = require('./postSlice');

module.exports = combineReducers({
  user: userSlice.reducer,
  post: postSlice.reducer,
});
