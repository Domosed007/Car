import { combineReducers } from "redux";
import CarsRedusers from "./car";
import ActiveCar from "./car-active";

const allReducers = combineReducers({
  cars: CarsRedusers,
  active: ActiveCar,
});

export default allReducers;
