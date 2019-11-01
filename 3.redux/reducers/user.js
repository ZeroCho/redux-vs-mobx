const initialState = {
  isLoggingIn: false,
  data: null,
};

const userReducer = (prevState = initialState, action) => { // 새로운 state 만들어주기
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return {
        ...prevState,
        data: null,
        isLoggingIn: true,
      };
    case 'LOG_IN_SUCCESS':
      return {
        ...prevState,
        data: action.data,
        isLoggingIn: false,
      };
    case 'LOG_IN_FAILURE':
      return {
        ...prevState,
        data: null,
        isLoggingIn: false,
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
