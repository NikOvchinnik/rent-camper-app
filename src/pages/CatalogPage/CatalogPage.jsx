import Catalog from "../../components/Catalog/Catalog";
import DocTitle from "../../components/DocTitle"
import FilterPanel from "../../components/FilterPanel/FilterPanel";

const CatalogPage = () => {
  return (
    <>
      <DocTitle>Catalog</DocTitle>
      <div >
        <FilterPanel/>
        <Catalog/>
      </div>
    </>
  );
};

export default CatalogPage;