import style from './AdvantageSection.module.css';

const AdvantagesSection = () => {
  return (
    <div className={style.advantagesContainer}>
      <ul className={style.groupList}>
        <li className={style.groupListItem}>
          <div className={style.ellipse}></div>
          <p className={style.groupListItemText}>Easy Booking</p>
        </li>
        <li className={style.groupListItem}>
          <div className={style.ellipse}></div>
          <p className={style.groupListItemTextBlack}>Affordable Prices</p>
        </li>
        <li className={style.groupListItem}>
          <div className={style.ellipse}></div>
          <p className={style.groupListItemTextBlack}>User Favorites</p>
        </li>
      </ul>
    </div>
  );
};

export default AdvantagesSection;
