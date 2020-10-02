export const selectIsUserLoggedIn = (r) => r.login.isUserLoggedIn;
export const selectUserAuthority = (r) => r.login.userAuthority;
export const selectAccessToken = (r) => r.login.accessToken;
export const selectUsernameOrEmail = (r) => r.login.usernameOrEmail;

export const selectPolls = (r) => r.getPolls.polls;
export const selectAddPoll = (r) => r.addPoll.polls;
