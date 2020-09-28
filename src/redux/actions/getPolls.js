export function getPolls() {
  return async (dispatch) => {
    dispatch({
      type: "GET_POLLS_STARTED",
    });

    try {
      fetch("http://13.80.245.153:82/api/Proverbs")
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: "GET_POLLS_SUCCESS", payload: json });
        });
    } catch (error) {
      dispatch({
        type: "GET_POLLS_FAILED",
        payload: error,
      });
    }
  };
}
