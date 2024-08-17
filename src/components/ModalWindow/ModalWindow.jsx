import Modal from 'react-modal';
import style from './ModalWindow.module.css';
import Icon from '../Icon/Icon';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';
import { useState } from 'react';

Modal.setAppElement('#root');

const ModalWindow = ({ isModalOpen, onCloseModal, data }) => {
  const [isFeaturesOpen, setFeaturesIsOpen] = useState(true);

  const openFeatures = () => {
    setFeaturesIsOpen(true);
  };

  const openReviews = () => {
    setFeaturesIsOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={style.modalWindow}
      style={{
        overlay: {
          backgroundColor: 'rgba(47, 47, 47, 0.6)',
        },
      }}
    >
      <div className={style.modalContainer}>
        <button className={style.btnClose} onClick={onCloseModal} type="button">
          <Icon id="x" width="20" height="20" />
        </button>
        <div className={style.infoContainer}>
          <h3 className={style.nameTitle}>{data.name}</h3>
          <div className={style.reviewsContainer}>
            <Icon id="star" width="16" height="16" />
            <p className={style.reviewsText}>
              {data.rating}({data.reviews.length} Reviews)
            </p>
            <Icon id="location" width="16" height="16" />
            <p className={style.locationText}>{data.location}</p>
          </div>
          <p className={style.priceTitle}>
            €
            {data.price.toLocaleString('de-DE', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <div className={style.galleryContainer}>
            <img
              className={style.galleryImg}
              src={data.gallery[0]}
              alt={data.name}
              width="290"
              height="310"
            />
            <img
              className={style.galleryImg}
              src={data.gallery[1]}
              alt={data.name}
              width="290"
              height="310"
            />
            <img
              className={style.galleryImg}
              src={data.gallery[2]}
              alt={data.name}
              width="290"
              height="310"
            />
          </div>
          <p className={style.descriptionText}>{data.description}</p>
        </div>
        <div className={style.btnContainer}>
          <button
            className={`${style.btnToogle} ${
              isFeaturesOpen ? style.active : ''
            }`}
            onClick={openFeatures}
            type="button"
          >
            Features
          </button>
          <button
            className={`${style.btnToogle} ${
              isFeaturesOpen ? '' : style.active
            }`}
            onClick={openReviews}
            type="button"
          >
            Reviews
          </button>
        </div>
        {isFeaturesOpen ? <Features /> : <Reviews />}
      </div>
    </Modal>
  );
};

export default ModalWindow;
