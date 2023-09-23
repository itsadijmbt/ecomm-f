import { configureStore, createSlice, current } from "@reduxjs/toolkit";

const authToken = { token: " " };

const authSlice = createSlice({
  name: "AUTH",
  initialState: authToken,
  reducers: {
    authTokenReciever: (state, action) => {
      state.token = action.payload;
      console.log("token available in global store now");
      console.log(state.token);
    },
  },
});

const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
  },
});

export const authActions = authSlice.actions;
//authSlice.actions includes all the reducers methdds
export default store;

/*we are gona use useSelector any where we eant to access the token as header body for auth in fetch/axios*/
/* const dispatch = useDispatch(); for sending token to the store*/
