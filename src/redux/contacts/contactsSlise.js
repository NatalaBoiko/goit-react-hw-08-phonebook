import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoaging: false,
    error: null,
  },
  reducers: {
    setFilter(state, { payload }) {
      return { filter: payload, ...state };
    },
  },
});

export const contactsReduser = contactsSlice.reducer;
