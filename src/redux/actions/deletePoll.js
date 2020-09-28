export function deletePoll(id) {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_POLL_STARTED",
    });

    try {
      fetch(
        "http://13.80.245.153:82/api/Proverbs/DeleteProverbs?proverbsId=" + id,
        {
          method: "DELETE",
        }
      )
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
