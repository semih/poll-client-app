export function addPoll(request) {
  return async (dispatch) => {
    dispatch({
      type: "POST_ADDPOLL_STARTED",
    });

    try {
      /*
      fetch("http://13.80.245.153:82/api/Proverbs/Post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      })
        .then((response) => response)
        .then((json) => {
          dispatch({ type: "POST_ADDPOLL_SUCCESS", payload: json });
          console.log(json);
        });*/
    } catch (error) {
      dispatch({
        type: "POST_ADDPOLL_FAILED",
        payload: error,
      });
    }
  };
}
