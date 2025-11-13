import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";

// create asyn thunk  : tạo 1 sự kiện bất đồng bộ để gọi api
//  tạo 1 hamf để client sử dụng và redux sẽ hiểu và thực hiện nó 
export const fetchUserByIdABC = createAsyncThunk(
  "user/fetchById",
  async ({id,email,password}, { rejectWithValue }) => {
    try {
      
      const response = await  apiClient.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      return rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    user: null,
    error : null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserByIdABC.pending, (state) => {
      state.user = null;
      state.error = null;
      state.loading = true;
    });
    
    builder.addCase(fetchUserByIdABC.fulfilled, (state, {payload}) => {
      state.id = payload.id;
      state.user = payload;
      state.error = null;
      state.loading = false;
    });
    
    builder.addCase(fetchUserByIdABC.rejected, (state, action) => {
       state.user = null;
      state.error = action.payload;
      state.loading = false;
    });

  },
});

export default userSlice.reducer;
