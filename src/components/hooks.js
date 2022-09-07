import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../redux/contacts/contactsSlise';

export const useContacts = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.contacts.filter);

  const setFilter = value => {
    dispatch(changeFilter(value));
  };

  return {
    filter,
    setFilter,
  };
};
