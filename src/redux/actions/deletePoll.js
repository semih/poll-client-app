import { deleteData } from "../../utils/helpers";

export function deletePoll(accessToken, id) {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_POLL_STARTED",
    });

    try {
      deleteData("http://localhost:8181/api/polls/" + id, {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + accessToken,
      });
      alert("Soru başarıyla silindi");
    } catch (error) {
      dispatch({
        type: "DELETE_POLL_FAILED",
        payload: error,
      });
    }
  };
}
