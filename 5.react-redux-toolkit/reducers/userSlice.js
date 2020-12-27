const { createSlice } = require('@reduxjs/toolkit');
const { logIn } = require('../actions/user');

const initialState = {
  isLoggingIn: false,
  data: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut(state, action) {
      state.data = null;
    }
  },
  extraReducers: (builder) => builder
    .addCase(logIn.pending, (state, action) => {
      state.data = null;
      state.isLoggingIn = true;
    })
    .addCase(logIn.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoggingIn = false;
    })
    .addCase(logIn.rejected, (state, action) => {
      state.error = action.payload;
    })
})

module.exports = userSlice;
