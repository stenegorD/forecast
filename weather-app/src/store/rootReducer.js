import { combineReducers } from "redux";
import weatherDataReducer from "./weatherDataReducer";


const rootReducer = combineReducers({
  weatherData: weatherDataReducer,
  
});

export default rootReducer;