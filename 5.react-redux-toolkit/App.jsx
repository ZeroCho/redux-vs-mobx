import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const { logIn } = require('./actions/user');
const userSlice = require('./reducers/userSlice');

const App = () => {
  const user = useSelector((state) => state.user);
  const { list } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(logIn({
      id: 'zerocho',
      password: '비밀번호',
    }));
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userSlice.actions.logOut());
  }, []);

  return (
    <div>
      {user.isLoggingIn
        ? <div>로그인 중</div>
        : user.data
          ? <div>{user.data.nickname}</div>
          : '로그인 해주세요.'}
      {!user.data
        ? <button onClick={onClick}>로그인</button>
        : <button onClick={onLogout}>로그아웃</button>}
    </div>
  );
};

export default App;
