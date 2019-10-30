const { createStore } = require('redux');

const reducer = (prevState, action) => { // 새로운 state 만들어주기
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...prevState,
        user: action.data,
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        user: null,
      };
    case 'ADD_POST':
      return {
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

const initialState = {
  user: null,
  isLoggingIn: true,
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

const store = createStore(reducer, initialState);
store.subscribe(() => { // react-redux 안에 들어있어요.
  console.log('changed'); // 화면 바꿔주는 코드 여기서
});

console.log('1st', store.getState());

const logIn = (data) => {
  return { // action
    type: 'LOG_IN',
    data,
  };
};

const logOut = () => {
  return { // action
    type: 'LOG_OUT',
  };
};

const addPost = (data) => {
  return {
    type: 'ADD_POST',
    data,
  }
};

// --------------------------------------

store.dispatch({
  type: 'LOG_IN_REQUEST',
});

store.dispatch(logIn({
  id: 1,
  name: 'zerocho',
  admin: true,
}));
console.log('2nd', store.getState());

store.dispatch(addPost({
  userId: 1,
  id: 1,
  content: '안녕하세요. 리덕스',
}));
console.log('3rd', store.getState());
store.dispatch(addPost({
  userId: 1,
  id: 2,
  content: '두번째 리덕스',
}));
console.log('4th', store.getState());

store.dispatch(logOut());
console.log('5th', store.getState());
