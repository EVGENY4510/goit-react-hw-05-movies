import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <div>
      <header className={css.header}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.active}` : `${css.nutActive}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.active}` : `${css.nutActive}`
          }
          to="movies"
        >
          Movies
        </NavLink>
      </header>
      <Outlet />
    </div>
  );
}
