import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';
import { getUser } from '../../../redux/auth/auth-selectors';

import css from '../../Navbar/UserMenu/userMenu.module.css';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.wrapperUserMenu}>
      <p className={css.userEmail}>{email}</p>
      <button className={css.btnLogout} onClick={onLogout} type="button">
        Logout
      </button>
    </div>
  );
};
export default UserMenu;