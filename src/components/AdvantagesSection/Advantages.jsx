import style from './Advantages.module.css';

const Advantages = () => {
  return (
    <div className={style.advantagesContainer}>
      <ul className={style.advantagesList}>
        <li className={style.advantagesItem}>
          <div className={style.ellipse}></div>
          <p>Easy Booking</p>
        </li>
        <li className={style.advantagesItem}>
          <div className={style.ellipse}></div>
          <p>Affordable Prices</p>
        </li>
        <li className={style.advantagesItem}>
          <div className={style.ellipse}></div>
          <p>User Favorites</p>
        </li>
      </ul>
    </div>
  );
};

export default Advantages;
