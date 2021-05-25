import { USER_REGISTRATION } from './actionTypes';

export const setUserRegistration = (user_object) => {
    const payload = {
        user_object
    };
    return (dispatch) => {
        returnToDispatch(dispatch, USER_REGISTRATION, payload);
    };
}

export const  returnToDispatch = (dispatch, type, payload) => {
    dispatch({
      type,
      payload,
    });
  }