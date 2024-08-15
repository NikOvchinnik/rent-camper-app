import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import style from './AppBar.module.css'

const AppBar = () => {
  return (
    <header className={style.headerContainer}>
      <nav className={style.navContainer}>
        <NavLink to="/">
          <div className={style.logoContainer}>
            <Icon id="alcove" width="30" height="30" />
            <p>RentCamper</p>
          </div>
        </NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
