import s from '../Styles.module.css';

export const ContacstForm = () => {
  return (
    <div className={s.view__container}>
      <form className={s.form__container}>
        <input type="text" name="name" placeholder="Name" />
        <input type="number" name="number" placeholder="phone number" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit " className={s.form__btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};
