import s from '../Styles.module.css';
import { changeFilter } from '../redux/contacts/contactsSlise';

import { useSelector, useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  return (
    <div className={s.cont__container}>
      <h2 className={s.home__title}>Filter</h2>
      <input
        type="text"
        name="filter"
        // value={value}
        placeholder="Find contacts by name"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};
