import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: null,
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loggedUser: (state , actions) => {
          // state.userInfo = actions.payload
          console.log(actions.payload);
          
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { loggedUser } = authSlice.actions;

export default authSlice.reducer;