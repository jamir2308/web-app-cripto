import { Coin } from "@/app/models/ProductModel";
import axiosInstance from "@/app/services/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCoins = createAsyncThunk(
    'crypto/fetchCoins',
    async (id: string = '', thunkAPI) => {
      try {
        const response = await axiosInstance.get(`/ticker/?id=${id}`);
        return response.data as Coin[];
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return thunkAPI.rejectWithValue(error.response.data.message || 'Error desconocido');
          }
          return thunkAPI.rejectWithValue('Error desconocido');
      }
    }
);
