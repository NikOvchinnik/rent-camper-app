import { useState } from 'react';
import Icon from '../Icon/Icon';
import ModalWindow from '../ModalWindow/ModalWindow';
import style from './CamperCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, removeFavorites } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';

const CamperCard = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [isFavoriteCamper, setIsFavoriteCamper] = useState(
    favorites.some(camper => camper._id === data._id)
  );

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleClick = data => {
    if (isFavoriteCamper) {
      dispatch(removeFavorites(data._id));
      setIsFavoriteCamper(false);
    } else {
      dispatch(addFavorites(data));
      setIsFavoriteCamper(true);
    }
  };

  return (
    <li className={style.cardContainer}>
      <div className={style.galleryContainer}>
        <img
          className={style.galleryImg}
          src={data.gallery[0]}
          alt={data.name}
          width="290"
          height="310"
        />
      </div>
      <div className={style.infoContainer}>
        <div className={style.infoContainer}>
          <div className={style.priceContainer}>
            <h3 className={style.nameTitle}>{data.name}</h3>
            <p className={style.priceTitle}>
              €
              {data.price.toLocaleString('de-DE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <button
              onClick={() => handleClick(data)}
              className={style.favoritesButton}
            >
              {isFavoriteCamper ? (
                <Icon id="heart-red" width="24" height="24" />
              ) : (
                <Icon id="heart" width="24" height="24" />
              )}
            </button>
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
        <button className={style.btnInfo} onClick={openModal} type="button">
          Show more
        </button>
        <ModalWindow
          isModalOpen={isModalOpen}
          onCloseModal={closeModal}
          data={data}
        />
      </div>
    </li>
  );
};

export default CamperCard;
