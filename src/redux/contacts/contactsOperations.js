import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://62fce052b9e38585cd47e248.mockapi.io/api/v1';
const getContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

const addContact = createAsyncThunk('contacts/add', async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

const deleteContact = createAsyncThunk('contacts/delete', async id => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

export const contactsOperations = { getContacts, addContact, deleteContact };
export default contactsOperations;
