export function userLoggedIn(usernameOrEmail) {
  return {
    type: "USER_LOGGED_IN",
    payload: {
      usernameOrEmail,
    },
  };
}
