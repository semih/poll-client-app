import { putData } from "../../utils/helpers";

export function updatePoll(accessToken, id, request) {
  return async (dispatch) => {
    dispatch({
      type: "PUT_POLL_STARTED",
    });

    try {
      await putData(
        "http://localhost:8181/api/polls/" + id,
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        request
      )
        .then((response) => response)
        .then((json) => {
          dispatch({ type: "PUT_POLL_SUCCESS", payload: json });
          console.log(json);
        });
    } catch (error) {
      dispatch({
        type: "PUT_POLL_FAILED",
        payload: error,
      });
    }
  };
}
