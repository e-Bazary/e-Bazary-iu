import { ShowGuesser } from "react-admin";
import AppointementList from "./component/AppointementList";
import EditAppointement from "./component/EditAppointement";

const appointement = {
  list: AppointementList,
  show: ShowGuesser,
  edit: EditAppointement,
};

export default appointement;
