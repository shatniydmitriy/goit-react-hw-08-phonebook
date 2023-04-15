import { NavLink } from 'react-router-dom';

import css from '../../Navbar/Navigation/navigation.module.css';

const Navigation = () => {
  return (
    <div>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
      <span className={css.line}>|</span>
      <NavLink to="/login" className={css.link}>
        Login
      </NavLink>
    </div>
  );
};
export default Navigation;