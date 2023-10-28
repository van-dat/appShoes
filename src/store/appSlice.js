import { createSlice } from "@reduxjs/toolkit";
import * as actions from './action';
export const appSlice = createSlice ({
    name: "app",
    initialState : {
        producSale : null,
        isLoading : false
    },
    reducers: {},
    extraReducers: (builder) => {
        // Bắt đầu thực hiện action login (Promise pending)
        builder.addCase(actions.getBanner.pending , (state) => {
          // Bật trạng thái loading
          state.isLoading = true;
        });
    
        // Khi thực hiện action login thành công (Promise fulfilled)
        builder.addCase(actions.getBanner.fulfilled, (state, action) => {
          // Tắt trạng thái loading, lưu thông tin user vào store
          state.isLoading = false;
          state.banner = action.payload;
        });
    
        // Khi thực hiện action login thất bại (Promise rejected)
        builder.addCase(actions.getBanner.rejected, (state, action) => {
          // Tắt trạng thái loading, lưu thông báo lỗi vào store
          state.isLoading = false;
          state.errorMessage = action.payload.message;
        });
    }
})
export const {} = appSlice.actions

export default appSlice.reducer