const { createSlice } = require('@reduxjs/toolkit');
const { addPost } = require('../actions/post');

const initialState = {
  list: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(addPost.pending, (state, action) => {

    })
    .addCase(addPost.fulfilled, (state, action) => {
      state.list.push(action.payload);
    })
    .addCase(addPost.rejected, (state, action) => {

    }),
});

module.exports = postSlice;
