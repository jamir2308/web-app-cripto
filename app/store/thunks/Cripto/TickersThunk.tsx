import { Coin } from "@/app/models/ProductModel";
import axiosInstance from "@/app/services/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTickers = createAsyncThunk(
    'crypto/fetchtickers',
    async (_, thunkAPI) => {
      try {
        const response = await axiosInstance.get('/tickers/');
        return response.data.data as Coin[];
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return thunkAPI.rejectWithValue(error.response.data.message || 'Error desconocido');
          }
          return thunkAPI.rejectWithValue('Error desconocido');
      }
    }
);