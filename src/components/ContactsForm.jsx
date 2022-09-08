import s from '../Styles.module.css';
// import { nanoid } from 'nanoid';

import { useState } from 'react';
import { useContacts } from '../components/hooks';
import { infoToast, successToast } from './Toasts';

export const ContacstForm = () => {
  const { contacts, isLoaging, addContact } = useContacts();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
    console.log(name, value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    // const contact = {
    //   id: nanoid(),
    //   name,
    //   number,
    // };
    const enterContacts = contacts.some(
      contact =>
        (contact.name === name.toLowerCase() && contact.number === number) ||
        contact.number === number
    );
    enterContacts
      ? infoToast(`${name} or ${number} is already in contacts`)
      : addContact({ name, number });
    !enterContacts && successToast('the contact is in the list  😃');
    setName('');
    setNumber('');
  };

  return (
    <div className={s.cont__container}>
      <form className={s.form__container} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="number"
          value={number}
          placeholder="phone number"
          onChange={handleChange}
        />
        <button type="submit " className={s.form__btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};
