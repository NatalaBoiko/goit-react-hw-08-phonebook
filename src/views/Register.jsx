import s from '../Styles.module.css';

// import { useState } from 'react';

const Register = () => {
  return (
    <div className={s.view__container}>
      <h2>Registration</h2>
      <form>
        <input type="text" name="name" placeholder="Name" />
      </form>
    </div>
  );
};
// const Register = () => (
//   <div className={s.view__container}>
//     <h2>Registration</h2>
//     <form>
//       <input type="text" name="name" value={name} />
//     </form>
//   </div>
// );

export default Register;
