import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from '../api/app';


export const getProductSale = createAsyncThunk("/product", async (data, rejectWithValue) => {
    const response = await apis.getProductSale();
    return response
  });