export function updatePoll(request) {
  return async (dispatch) => {
    dispatch({
      type: "PUT_POLL_STARTED",
    });

    try {
      fetch("http://13.80.245.153:82/api/Proverbs/UpdateProverbs", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      })
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
