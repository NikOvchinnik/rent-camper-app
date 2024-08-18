import { useSelector } from 'react-redux';
import CamperCard from '../CamperCard/CamperCard';
import style from './Catalog.module.css';
import { selectFilteredCampers} from '../../redux/campers/selectors';
import { useState } from 'react';

const Catalog = () => {
  const campers = useSelector(selectFilteredCampers);
  const [visibleCount, setVisibleCount] = useState(4);



  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  const visibleCampers = campers.slice(0, visibleCount);

  return (
    <div className={style.catalogContainer}>
      {campers.length ? (
        <>
          <ul className={style.catalogList}>
            {visibleCampers.map(camper => (
              <CamperCard key={camper._id} data={camper} />
            ))}
          </ul>
          {visibleCount < campers.length && (
            <button
              className={style.btnLoadMore}
              onClick={handleLoadMore}
              type="button"
            >
              Load more
            </button>
          )}
        </>
      ) : (
        <p className={style.notFoundText}>
          No results found for the selected filters
        </p>
      )}
    </div>
  );
};

export default Catalog;
