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

export default contactsSlice.reducer;
