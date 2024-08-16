import campers from "../../campers.json"
import CamperCard from "../CamperCard/CamperCard";

const Catalog = () => {
  
  return (
    <ul>
      {campers.map(camper => {
        return <CamperCard key={camper.id} data={camper} />
      })}
    </ul>
  );
};

export default Catalog;
