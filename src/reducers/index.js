import {combineReducers} from "redux";
import { reducer as formReducer } from "redux-form";
import UserRegistrationForm from './Registration/reducer';

export const createRootReducer = () => combineReducers({
    UserRegistrationForm,
    form: formReducer  
}) 