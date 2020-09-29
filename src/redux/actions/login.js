export function userLoggedIn(usernameOrEmail, accessToken) {
  return {
    type: "USER_LOGGED_IN",
    payload: {
      usernameOrEmail,
      accessToken,
    },
  };
}
