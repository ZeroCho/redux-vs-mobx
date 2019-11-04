import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { userStore, postStore } from './store';

@observer
class App extends Component {
  onClick = () => {
    userStore.logIn({
      nickname: 'zerocho',
      password: '비밀번호',
    });
  };

  onLogout = () => {
    userStore.logOut();
  };

  render() {
    return (
      <div>
        {userStore.isLoggingIn
          ? <div>로그인 중</div>
          : userStore.data
            ? <div>{userStore.data.nickname}</div>
            : '로그인 해주세요.'}
        {!userStore.data
          ? <button onClick={this.onClick}>로그인</button>
          : <button onClick={this.onLogout}>로그아웃</button>}
        <div>{postStore.data.length}</div>
      </div>
    );
  }
}

export default App;
