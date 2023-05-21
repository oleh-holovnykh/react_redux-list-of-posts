/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../types/User';

type AuthorState = {
  author: User | null;
};

const initialState: AuthorState = {
  author: null,
};

const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    set: (state, actions: PayloadAction<User>) => {
      state.author = actions.payload;
    },
  },
});

export default authorSlice.reducer;
export const { actions } = authorSlice;
