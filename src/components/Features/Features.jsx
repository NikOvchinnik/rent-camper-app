import BookForma from '../BookForma/BookForma';
import Icon from '../Icon/Icon';
import style from './Features.module.css';

const Features = ({ data }) => {
  return (
    <div className={style.featuresContainer}>
      <div className={style.detailsContainer}>
        <ul className={style.detailsList}>
          <li className={style.detailsItem}>
            <Icon id="adults" width="20" height="20" />
            <p>{data.adults} adults</p>
          </li>
          {Object.entries(data.details).map(([key, value], index) => {
            return (
              <li key={index} className={style.detailsItem}>
                <Icon id={key} width="20" height="20" />
                {value > 1 ? (
                  <p>
                    {value} {key}
                  </p>
                ) : (
                  <p>{key}</p>
                )}
              </li>
            );
          })}
        </ul>
        <div className={style.infoContainer}>
          <h3 className={style.infoTitle}>Vehicle details</h3>
          <ul className={style.infoList}>
            <li className={style.infoItem}>
              <p>Form</p>
              <p>{data.form}</p>
            </li>
            <li className={style.infoItem}>
              <p>Length</p>
              <p>{data.length}</p>
            </li>
            <li className={style.infoItem}>
              <p>Width</p>
              <p>{data.width}</p>
            </li>
            <li className={style.infoItem}>
              <p>Height</p>
              <p>{data.height}</p>
            </li>
            <li className={style.infoItem}>
              <p>Tank</p>
              <p>{data.tank}</p>
            </li>
            <li className={style.infoItem}>
              <p>Consumption</p>
              <p>{data.consumption}</p>
            </li>
          </ul>
        </div>
      </div>
      <BookForma/>
    </div>
  );
};

export default Features;
