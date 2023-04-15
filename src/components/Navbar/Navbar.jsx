import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as React from 'react';
import { BsPhone } from 'react-icons/bs';

import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import { isUserLogin } from 'redux/auth/auth-selectors';

import css from '../Navbar/navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div className={css.navbar}>
      <NavLink to="/" className={css.titleMyPhonebook}>
        My Phonebook <BsPhone />
      </NavLink>
      {!isLogin && <Navigation />}
      {isLogin && <UserMenu />}
    </div>
  );
};
export default Navbar;