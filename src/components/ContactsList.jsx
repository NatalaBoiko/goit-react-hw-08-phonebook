import s from '../Styles.module.css';

const contacts = [
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const ContactsList = () => {
  return (
    <div>
      {/* <h2>Contacts</h2> */}
      <ul className={s.items__container}>
        {contacts &&
          contacts.map(({ id, name, number }) => {
            return (
              <li className={s.item} key={id}>
                {/* <div className={s.item}> */}
                <h3 className={s.item__name}>{name}:</h3>
                <p className={s.item__name}>{number}</p>
                {/* </div> */}
                <button
                  className={s.user__btn}
                  type="button"
                  // onClick={() => {
                  //   dispatch(contactsOperations.deleteContact(id));
                  //   dispatch(setFilter(''));
                  // }}
                >
                  {/* {isLoading ? '...' : 'Delete'} */}
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
