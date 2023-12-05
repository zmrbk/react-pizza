import axios from 'axios';
import { Pizza, SearchPizzaParams } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { currentPage, order, sortBy, category, search } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://654df55bcbc3253557422701.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );

    return data;
  },
);
