import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    isLoaging: false,
    error: null,
  },
  reducers: {
    changeFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
  },
});

export const { changeFilter } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
