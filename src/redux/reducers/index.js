import login from "./login";
import getPolls from "./getPolls";
import addPoll from "./addPoll";
import deletePoll from "./deletePoll";
import updatePoll from "./updatePoll";
import { combineReducers } from "redux";

export default combineReducers({
  login,
  getPolls,
  addPoll,
  updatePoll,
  deletePoll,
});
