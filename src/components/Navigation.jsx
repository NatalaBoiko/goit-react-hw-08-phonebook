import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav>
      <p>Navigation</p>
      <p>Contacts</p>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Contacts</NavLink>

      {/* <NavLink to="/contacts">Contacts</NavLink> */}

      {/* {isLoggedIn && <Link to="/contacts">Contacts</Link>} */}
    </nav>
  );
};

export default Navigation;
