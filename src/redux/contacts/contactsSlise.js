import { createSlice } from '@reduxjs/toolkit';
import { contactsOperations } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
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
  extraReducers: {
    [contactsOperations.getContacts.pending]: (state, _) => ({
      ...state,
      isLoaging: true,
    }),
    [contactsOperations.getContacts.fulfilled](state, { payload }) {
      return { ...state, items: payload, isLoaging: false };
    },
    [contactsOperations.getContacts.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoaging: false,
    }),

    [contactsOperations.addContact.pending]: (state, _) => ({
      ...state,
      isLoaging: true,
    }),
    [contactsOperations.addContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: [payload, ...state.items],
      isLoaging: false,
    }),
    [contactsOperations.addContact.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoaging: false,
    }),

    [contactsOperations.deleteContact.pending]: (state, _) => ({
      ...state,
      isLoaging: true,
    }),
    [contactsOperations.deleteContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: state.items.filter(({ id }) => id !== payload),
      isLoaging: false,
    }),
    [contactsOperations.deleteContact.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoaging: false,
    }),
  },
});

export const { changeFilter } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
