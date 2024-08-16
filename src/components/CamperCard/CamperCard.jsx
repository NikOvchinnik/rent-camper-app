import Icon from '../Icon/Icon';
import style from './CamperCard.module.css';

const CamperCard = ({ data }) => {
  return (
    <li className={style.cardContainer}>
      <div className={style.camperContainer}>
        <div className={style.galleryContainer}>
          <img src={data.gallery[0]} alt={data.name} width="290" height="310" />
        </div>
        <div className={style.infoContainer}>
          <div className={style.infoContainer}>
            <div className={style.priceContainer}>
              <h3 className={style.nameTitle}>{data.name}</h3>
              <p className={style.priceTitle}>{data.price}</p>
              <Icon id="heart" width="24" height="24" />
            </div>
            <div className={style.reviewsContainer}>
              <Icon id="star" width="16" height="16" />
              <p className={style.reviewsText}>
                {data.rating}({data.reviews.length} Reviews)
              </p>
              <Icon id="location" width="16" height="16" />
              <p className={style.locationText}>{data.location}</p>
            </div>
          </div>
          <p className={style.descriptionText}>{data.description}</p>
          <ul className={style.detailsList}>
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
          <button className={style.btnInfo} type="button">
            Show more
          </button>
        </div>
      </div>
    </li>
  );
};

export default CamperCard;
