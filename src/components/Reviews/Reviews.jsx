import BookForma from '../BookForma/BookForma';
import Icon from '../Icon/Icon';
import style from './Reviews.module.css';

const Reviews = ({ data, onCloseModal}) => {
  return (
    <div className={style.reviewsContainer}>
      <ul className={style.reviewsList}>
        {data.reviews.map((review, index) => {
          return (
            <li key={index} className={style.reviewsItem}>
              <div className={style.reviewerContainer}>
                <div className={style.reviewerPicture}>
                  <p>{review.reviewer_name[0]}</p>
                </div>
                <div>
                  <h4 className={style.reviewerName}>{review.reviewer_name}</h4>
                  {/* {<Icon id="star" width="16" height="16" />} */}
                  {Array.from({ length: review.reviewer_rating }).map(
                    (_, i) => (
                      <Icon key={i} id="star" width="16" height="16" />
                    )
                  )}
                  {Array.from({ length: 5 - review.reviewer_rating }).map(
                    (_, i) => (
                      <Icon key={i} id="rating" width="16" height="16" />
                    )
                  )}
                </div>
              </div>
              <p className={style.reviewerComment}>{review.comment}</p>
            </li>
          );
        })}
      </ul>
      <BookForma onCloseModal={onCloseModal} />
    </div>
  );
};

export default Reviews;
