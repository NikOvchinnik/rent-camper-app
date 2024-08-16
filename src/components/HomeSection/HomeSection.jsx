import { NavLink } from 'react-router-dom';
import style from './HomeSection.module.css';

const HomeSection = () => {
  return (
    <div className={style.homeSection}>
      <p className={style.homeText}>
        Easily rent a camper and start your adventure
      </p>
      <h1 className={style.homeTitle}>Rent Camper App</h1>
      <NavLink className={style.homeLink} to="/catalog">
        Start renting
      </NavLink>
    </div>
  );
};

export default HomeSection;
