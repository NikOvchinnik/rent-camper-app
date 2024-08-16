import DocTitle from '../../components/DocTitle';
import style from './FavoritesPage.module.css';

const FavoritesPage = () => {
  return (
    <>
      <DocTitle>Favorites</DocTitle>
      <div className={style.favoritesContainer}>
        <h1>Favorites</h1>
      </div>
    </>
  );
};

export default FavoritesPage;
