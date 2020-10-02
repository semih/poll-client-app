import { postData } from "../../utils/helpers";

export function addPoll(accessToken, request) {
  return async (dispatch) => {
    dispatch({
      type: "ADD_POLL_STARTED",
    });

    try {
      await postData(
        "http://localhost:8181/api/polls",
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        request
      )
        .then((response) => response.json)
        .then((json) => {
          dispatch({ type: "ADD_POLL_SUCCESS", payload: json });
        });
    } catch (error) {
      dispatch({
        type: "ADD_POLL_FAILED",
        payload: error,
      });
    }
  };
}
