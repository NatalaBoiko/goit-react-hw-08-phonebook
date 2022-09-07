import s from '../Styles.module.css';

export const ContactsList = ({ contacts }) => {
  return (
    <div>
      <ul className={s.items__container}>
        {contacts &&
          contacts.map(({ id, name, number }) => {
            return (
              <li className={s.item} key={id}>
                <h3 className={s.item__name}>{name}:</h3>
                <p className={s.item__name}>{number}</p>
                <button className={s.user__btn} type="button">
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
