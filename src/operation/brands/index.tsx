import { EditGuesser, ShowGuesser } from "react-admin";
import BrandsList from "./component/brandsList";
import ShowBrand from "./component/ShowBrand";
import EditBrand from "./component/EditBrand";

const brands = {
  list: BrandsList,
  show: ShowBrand,
  edit: EditBrand,
};

export default brands;
