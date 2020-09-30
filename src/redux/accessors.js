export const selectIsUserLoggedIn = (s) => s.login.isUserLoggedIn;
export const selectUserAuthorities = (s) => s.login.userAuthorities;
export const selectAccessToken = (s) => s.login.accessToken;
export const selectUsernameOrEmail = (s) => s.login.usernameOrEmail;

export const selectPolls = (s) => s.getPolls.polls;
