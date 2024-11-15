import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface UserState {
    auth: boolean
  }
  
  // Define the initial state using that type
const initialState: UserState = {
    auth: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<boolean>) => {
            state.auth = action.payload;
        },
        removeToken: (state) => {
            state.auth = false;
        },
    },
});

export const { setToken, removeToken } = userSlice.actions;
export default userSlice.reducer;