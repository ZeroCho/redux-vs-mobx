const { createAsyncThunk } = require('@reduxjs/toolkit');

const delay = (time, value) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(value);
  }, time);
});

exports.logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => {
  // throw new Error('비밀번호가 틀렸습니다.');
  return await delay(500,{
    userId: 1,
    nickname: 'zerocho'
  });
});
