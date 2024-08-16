import Catalog from "../../components/Catalog/Catalog";
import DocTitle from "../../components/DocTitle"
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import style from "./CatalogPage.module.css"

const CatalogPage = () => {
  return (
    <>
      <DocTitle>Catalog</DocTitle>
      <div className={style.catalogContainer}>
        <FilterPanel/>
        <Catalog/>
      </div>
    </>
  );
};

export default CatalogPage;