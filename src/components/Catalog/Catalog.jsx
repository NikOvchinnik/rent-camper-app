import { useSelector } from "react-redux";
import CamperCard from "../CamperCard/CamperCard";
import style from "./Catalog.module.css"
import { selectFilteredCampers } from "../../redux/campers/selectors";

const Catalog = () => {
  const campers = useSelector(selectFilteredCampers);

  return (
    <div className={style.catalogContainer}>
      {campers.length ? (
        <>
          <ul className={style.catalogList}>
            {campers.map(camper => {
              return <CamperCard key={camper._id} data={camper} />;
            })}
          </ul>
          <button className={style.btnLoadMore} type="button">
            Load more
          </button>
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
