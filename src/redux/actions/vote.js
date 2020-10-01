import { postData } from "../../utils/helpers";

export function castVote(accessToken, request, id) {
  return async (dispatch) => {
    dispatch({
      type: "POST_CASTVOTE_STARTED",
    });

    try {
      await postData(
        "http://localhost:8181/api/polls/" + id + "/votes",
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        request
      )
        .then((response) => response.json)
        .then((json) => {
          dispatch({ type: "POST_CASTVOTE_SUCCESS", payload: json });
        });
    } catch (error) {
      dispatch({
        type: "POST_CASTVOTE_FAILED",
        payload: error,
      });
    }
  };
}
