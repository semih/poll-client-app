import { postData } from "../../utils/helpers";

export function castVote(accessToken, request) {
  return async (dispatch) => {
    dispatch({
      type: "POST_CASTVOTE_STARTED",
    });

    try {
      await postData(
        "http://localhost:8181/api/polls/" + request.pollId + "/votes",
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        request
      )
        .then((response) => response.json)
        .then((json) => {
          dispatch({ type: "POST_CASTVOTE_SUCCESS", payload: json });
          alert("Oy verme işlemi başarılı.");
        });
    } catch (error) {
      dispatch({
        type: "POST_CASTVOTE_FAILED",
        payload: error,
      });
      alert("Oy verme işlemi sırasında hata oluştu.");
    }
  };
}
