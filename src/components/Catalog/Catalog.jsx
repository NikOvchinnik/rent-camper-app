import campers from "../../campers.json"
import CamperCard from "../CamperCard/CamperCard";
import style from "./Catalog.module.css"

const Catalog = () => {
  
  return (
    <div className={style.catalogContainer}>
      <ul className={style.catalogList}>
        {campers.map(camper => {
          return <CamperCard key={camper.id} data={camper} />;
        })}
      </ul>
      <button className={style.btnLoadMore} type="button">
        Load more
      </button>
    </div>
  );
};

export default Catalog;
