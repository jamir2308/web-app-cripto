import { MarketStats } from "@/app/models/ProductModel";
import axiosInstance from "@/app/services/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGlobal = createAsyncThunk(
    'crypto/fetchglobal',
    async (_, thunkAPI) => {
      try {
        const response = await axiosInstance.get('/global/');
        return response.data as MarketStats[];
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return thunkAPI.rejectWithValue(error.response.data.message || 'Error desconocido');
          }
          return thunkAPI.rejectWithValue('Error desconocido');
      }
    }
);