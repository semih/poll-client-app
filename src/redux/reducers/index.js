import login from "./login";
import getPolls from "./getPolls";
import deletePoll from "./deletePoll";
import updatePoll from "./updatePoll";
import { combineReducers } from "redux";

export default combineReducers({ login, getPolls, updatePoll, deletePoll });
