import { NavLink } from "react-router-dom";
import style from "./HomeSection.module.css"

const HomeSection = () => {
  return (
    <div className={style.homeSection}>
      <p className={style.homeText}>
        Easily rent a camper and start your adventure
      </p>
      <h1 className={style.homeTitle}>Rent Camper App</h1>
      <div className={style.homeThumb}>
        <NavLink className={style.homeTracker} to="/signup">
          Start renting
        </NavLink>
      </div>
    </div>
  );
};

export default HomeSection;
