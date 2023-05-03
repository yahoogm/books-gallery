import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLogin: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
        isLogin: true,  
      };
    },
  },
});

const { actions, reducer: userReducer } = userSlice;
export const { loginUser } = actions;
export default userReducer;
