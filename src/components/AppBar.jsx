import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import s from '../Styles.module.css';

export default function AppBar() {
  //   const { isLoggedIn } = useAuth();
  return (
    <header className={s.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
}
