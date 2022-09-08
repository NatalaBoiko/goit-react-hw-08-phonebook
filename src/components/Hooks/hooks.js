import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsSlise';
import { contactsOperations } from '../../redux/contacts/contactsOperations';

export const useContacts = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);
  const isLoaging = useSelector(state => state.contacts.loader);
  const error = useSelector(state => state.contacts.error);

  const setFilter = value => {
    dispatch(changeFilter(value));
  };

  const getContacts = () => {
    dispatch(contactsOperations.getContacts());
  };

  const addContact = data => {
    dispatch(contactsOperations.addContact(data));
  };

  const deleteContact = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  return {
    filter,
    contacts,
    isLoaging,
    error,
    setFilter,
    getContacts,
    addContact,
    deleteContact,
  };
};
