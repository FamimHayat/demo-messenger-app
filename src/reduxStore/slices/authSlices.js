import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("userDetails")) || null,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    loggedUser: (state, actions) => {
          state.userInfo = actions.payload
           localStorage.setItem("userDetails",JSON.stringify(actions.payload))
    },
  },
});

// Action creators are generated for each case reducer function
export const { loggedUser } = authSlice.actions;

export default authSlice.reducer;
