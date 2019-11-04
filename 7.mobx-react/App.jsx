import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { userStore, postStore } from './store';

@observer
class App extends Component {
  state = observable({
    name: '',
    password: '',
  });

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
        <input value={this.state.name} onChange={(e) => {
          this.state.name = e.target.value;
        }} />
        <input value={this.state.password} type="password" onChange={(e) => {
          this.state.password = e.target.value;
        }}  />
      </div>
    );
  }
}

export default App;
