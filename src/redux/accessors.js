export const selectIsUserLoggedIn = (s) => s.login.isUserLoggedIn;
export const selectUserAuthority = (s) => s.login.userAuthority;
export const selectAccessToken = (s) => s.login.accessToken;
export const selectUsernameOrEmail = (s) => s.login.usernameOrEmail;

export const selectPolls = (s) => s.getPolls.polls;
export const selectAddPoll = (s) => s.addPoll.polls;
