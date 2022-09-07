import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../redux/contacts/contactsSlise';

export const useContacts = () => {
  const dispatch = useDispatch();

  const setFilter = value => {
    console.log(value);
    dispatch(changeFilter(value));
  };

  return {
    setFilter,
  };
};
