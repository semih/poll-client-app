import { deleteData } from "../../utils/helpers";

export function deletePoll(accessToken, id) {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_POLL_STARTED",
    });

    try {
      deleteData("http://localhost:8181/api/polls/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      })
        .then((response) => response)
        .then((json) => {
          dispatch({ type: "DELETE_POLL_SUCCESS", payload: json });
        });
    } catch (error) {
      dispatch({
        type: "DELETE_POLL_FAILED",
        payload: error,
      });
    }
  };
}
