import { useEffect } from 'react';
import Catalog from '../../components/Catalog/Catalog';
import DocTitle from '../../components/DocTitle';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import style from './CatalogPage.module.css';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <DocTitle>Catalog</DocTitle>
      <div className={style.catalogContainer}>
        <FilterPanel />
        <Catalog />
      </div>
    </>
  );
};

export default CatalogPage;
