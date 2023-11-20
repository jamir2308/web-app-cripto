import { ExchangeData } from "@/app/models/ProductModel";
import axiosInstance from "@/app/services/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchExchanges = createAsyncThunk(
    'crypto/fetchExchanges',
    async (_, thunkAPI) => {
      try {
        const response = await axiosInstance.get('/exchanges/');
        return response.data as ExchangeData;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return thunkAPI.rejectWithValue(error.response.data.message || 'Error desconocido');
          }
          return thunkAPI.rejectWithValue('Error desconocido');
      }
    }
);