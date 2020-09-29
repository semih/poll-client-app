export function userLoggedIn(usernameOrEmail, userAuthorities, accessToken) {
  return {
    type: "USER_LOGGED_IN",
    payload: {
      usernameOrEmail,
      userAuthorities,
      accessToken,
    },
  };
}
