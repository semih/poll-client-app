const defaultState = {
  isUserLoggedIn: false,
  usernameOrEmail: null,
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      return {
        ...state,
        usernameOrEmail: action.payload.usernameOrEmail,
        isUserLoggedIn: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
