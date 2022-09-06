import s from '../Styles.module.css';

export const Filter = () => {
  return (
    <div className={s.cont__container}>
      <h2 className={s.home__title}>Filter</h2>
      <input type="text" name="filter" placeholder="Find contacts by name" />
    </div>
  );
};
