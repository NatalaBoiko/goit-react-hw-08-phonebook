import s from '../Styles.module.css';
import { Loader } from '../components/Loader/Loader';

import { useContacts } from '../components/hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../redux/contacts/contactsOperations';

export const ContactsList = () => {
  const { contacts, isLoaging, filter } = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = findContacts();

  return (
    <div>
      {isLoaging ? (
        <Loader />
      ) : (
        <ul className={s.items__container}>
          {contacts &&
            filteredContacts.map(({ id, name, number }) => {
              return (
                <li className={s.item} key={id}>
                  <h3 className={s.item__name}>{name}:</h3>
                  <p className={s.item__name}>{number}</p>
                  <button className={s.user__btn} type="button">
                    {/* {isLoaging ? '...' : 'Delete'} */}
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

{
  /* <ul className={s.items__container}>
{contacts &&
  filteredContacts.map(({ id, name, number }) => {
    return (
      <li className={s.item} key={id}>
        <h3 className={s.item__name}>{name}:</h3>
        <p className={s.item__name}>{number}</p>
        <button className={s.user__btn} type="button">
          {isLoading ? '...' : 'Delete'}
        </button>
      </li>
    );
  })}
</ul> */
}
