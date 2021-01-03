const initialState = {
  isLoggingIn: false,
  data: null,
};

const userReducer = (prevState = initialState, action) => { // 새로운 state 만들어주기
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...prevState,
        data: action.data,
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        data: null,
      };
    default:
      return prevState;
  }
};

module.exports = userReducer;
