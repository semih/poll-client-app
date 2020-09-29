export function getUserInfo(token) {
  return async (dispatch) => {
    dispatch({
      type: "GET_USERINFO_STARTED",
    });

    try {
      fetch("http://localhost:8181/api/user/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: "GET_USERINFO_SUCCESS", payload: json });
        });
    } catch (error) {
      dispatch({
        type: "GET_USERINFO_FAILED",
        payload: error,
      });
    }
  };
}
