const INITIAL_STATE = {
  userData: {},
};
export const ADD_USER_INFO = "ADD_USER_INFO";
export const user = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ADD_USER_INFO:
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};
