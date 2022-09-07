import s from '../Styles.module.css';

export const Filter = ({ onChange }) => {
  return (
    <div className={s.cont__container}>
      <h2 className={s.home__title}>Filter</h2>
      <input
        type="text"
        name="filter"
        // value={value}
        placeholder="Find contacts by name"
        onChange={onChange}
      />
    </div>
  );
};
