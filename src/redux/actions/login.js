export function userLoggedIn(usernameOrEmail, userAuthorities) {
  return {
    type: "USER_LOGGED_IN",
    payload: {
      usernameOrEmail,
      userAuthorities,
    },
  };
}
