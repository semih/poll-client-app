import { postData } from "../../utils/helpers";

export function addPoll(accessToken, request) {
  return async (dispatch) => {
    dispatch({
      type: "POST_ADDPOLL_STARTED",
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
          dispatch({ type: "POST_ADDPOLL_SUCCESS", payload: json });
          console.log(json);
        });
    } catch (error) {
      dispatch({
        type: "POST_ADDPOLL_FAILED",
        payload: error,
      });
    }
  };
}
