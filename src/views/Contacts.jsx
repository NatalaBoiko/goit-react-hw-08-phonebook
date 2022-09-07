import s from '../Styles.module.css';
import { ContacstForm } from '../components/ContactsForm';
import { Filter } from '../components/Filter';
import { ContactsList } from '../components/ContactsList';
import { Loader } from '../components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from '../components/hooks';
import { contactsOperations } from '../redux/contacts/contactsOperations';

// const contacts = [];

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <div className={s.view__container}>
      <h2 className={s.home__title}>Contacts</h2>
      <ContacstForm />
      <Filter />
      {contacts ? <ContactsList /> : <Loader />}
      {/* <Loader /> */}
    </div>
  );
};

export default Contacts;
