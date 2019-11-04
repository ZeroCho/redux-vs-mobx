import React, { useCallback } from 'react';
import { useObserver, useLocalStore } from 'mobx-react';

import useStore from './useStore';

const App = () => {
  const { userStore } = useStore();
  console.log(userStore);

  const state = useLocalStore(() => ({
    name: '',
    password: '',
    onChangeName(e) {
      this.name = e.target.value;
    },
    onChangePassword(e) {
      this.password = e.target.value;
    }
  }));

  const onClick = useCallback(() => {
    userStore.logIn({
      nickname: 'zerocho',
      password: '비밀번호',
    });
  }, []);

  const onLogout = useCallback(() => {
    userStore.logOut();
  }, []);

  return useObserver(() => (
    <div>
      {userStore.isLoggingIn
        ? <div>로그인 중</div>
        : userStore.data
          ? <div>{userStore.data.nickname}</div>
          : '로그인 해주세요.'}
      {!userStore.data
        ? <button onClick={onClick}>로그인</button>
        : <button onClick={onLogout}>로그아웃</button>}
      <input value={state.name} onChange={state.onChangeName} />
      <input value={state.password} type="password" onChange={state.onChangePassword}  />
    </div>
  ));
};

export default App;
