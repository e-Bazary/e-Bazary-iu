import { EditContextProvider, EditGuesser, ShowGuesser } from "react-admin";
import CarList from "./component/CarList";
import CarShow from "./component/CarShow";

const car = {
  list: CarList,
  show: CarShow,
  edit: EditGuesser,
};
export default car;
