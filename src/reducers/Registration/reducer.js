import { USER_REGISTRATION } from "./actionTypes";

const initialState = {
  user_object: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTRATION:
      return {
        ...state,
        user_object: action.payload.user_object,
      };
    default:
      return state;
  }
};
