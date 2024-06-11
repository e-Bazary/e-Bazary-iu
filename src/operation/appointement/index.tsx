import { EditGuesser, ListGuesser, ShowGuesser } from "react-admin";
import AppointementList from "./component/AppointementList";

const appointement = {
  list: AppointementList,
  show: ShowGuesser,
  edit: EditGuesser,
};

export default appointement;
