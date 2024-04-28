import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import services from "./Services";

const userDetails = localStorage.getItem('user-details');

const initialState = {
  user: userDetails ? JSON.parse(userDetails) : null,
  isSuccess: false,
  isfail: false,
  isRegister: false,
  message: ""
}

export const loginFun = createAsyncThunk('login-fun', async (data, thunkAPI) => {
  try {
    return await services.loginFun(data);
  } catch (error) {
    return thunkAPI.rejectWithValue((error.response && error.response.data && error.response.data.message) || error.message || error.toString())
  }
})

export const registerFun = createAsyncThunk('register-fun', async (data, thunkAPI) => {
  try {
    return await services.registerFun(data);
  }
  catch (error) {
    return thunkAPI.rejectWithValue((error.response && error.response.data && error.response.data.message) || error.message || error.toString())
  }
})



export const authSlice = createSlice({
  name: 'auth-slice',
  initialState,
  reducers: {
    resetService: (state, action) => {
      state.isRegister = false
      state.isSuccess = false
      state.isfail = false
      state.message = ""
    },
    logout: (state, action) => {
      localStorage.removeItem('user-details');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginFun.fulfilled, (state, action) => {
        localStorage.setItem('user-details', JSON.stringify(action.payload.user));
        state.user = action.payload.user
        state.isSuccess = true
        state.message = action.payload.message
      })
      .addCase(loginFun.rejected, (state, action) => {
        state.user = {}
        state.isfail = true
        state.isSuccess = false
        state.message = action.payload.message
      })
      .addCase(registerFun.fulfilled, (state, action) => {
        state.isRegister = true
        state.isSuccess = true
        state.message = action.payload.message
      })
      .addCase(registerFun.rejected, (state, action) => {
        state.isRegister = false
        state.isfail = true
        state.message = action.payload.message
      })
  },
})

export const { resetService } = authSlice.actions;

export default authSlice.reducer;