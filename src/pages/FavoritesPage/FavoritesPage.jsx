import { useSelector } from 'react-redux';
import DocTitle from '../../components/DocTitle';
import style from './FavoritesPage.module.css';
import { selectFavorites } from '../../redux/favorites/selectors';
import CamperCard from '../../components/CamperCard/CamperCard';

const FavoritesPage = () => {
  const favoritesCampers = useSelector(selectFavorites);

  return (
    <>
      <DocTitle>Favorites</DocTitle>
      <div className={style.favoritesContainer}>
        <h2 className={style.favoritesTitle}>Your favorites campers</h2>
        {favoritesCampers.length ? (
          <>
            <ul className={style.favoritesList}>
              {favoritesCampers.map(camper => {
                return <CamperCard key={camper._id} data={camper} />;
              })}
            </ul>
          </>
        ) : (
          <p className={style.notFoundText}>You have no favorite campers</p>
        )}
      </div>
    </>
  );
};

export default FavoritesPage;
