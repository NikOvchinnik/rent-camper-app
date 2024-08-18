import { useEffect } from 'react';
import Catalog from '../../components/Catalog/Catalog';
import DocTitle from '../../components/DocTitle';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import style from './CatalogPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import { selectLoading } from '../../redux/campers/selectors';
import Loader from "../../components/Loader/Loader"

const CatalogPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <DocTitle>Catalog</DocTitle>
      <div className={style.catalogContainer}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <FilterPanel />
            <Catalog />
          </>
        )}
      </div>
    </>
  );
};

export default CatalogPage;
