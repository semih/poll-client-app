const defaultState = {
  isUserLoggedIn: false,
  usernameOrEmail: null,
  userAuthorities: null,
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      return {
        ...state,
        usernameOrEmail: action.payload.usernameOrEmail,
        userAuthorities: action.payload.userAuthorities,
        isUserLoggedIn: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
