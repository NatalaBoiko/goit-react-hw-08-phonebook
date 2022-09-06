import { Loader } from '../components/Loader/Loader';
import s from '../Styles.module.css';
import { ContacstForm } from '../components/ContactsForm';
import { Filter } from '../components/Filter';
import { ContactsList } from '../components/ContactsList';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const Contacts = () => {
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
