import { getData } from "../../utils/helpers";

export function getPolls(accessToken) {
  return async (dispatch) => {
    dispatch({
      type: "GET_POLLS_STARTED",
    });

    try {
      console.log({ accessToken });
      const response = await getData(
        "http://localhost:8181/api/polls",
        accessToken
      );

      dispatch({ type: "GET_POLLS_SUCCESS", payload: response });
    } catch (error) {
      dispatch({
        type: "GET_POLLS_FAILED",
        payload: error,
      });
    }
  };
}
