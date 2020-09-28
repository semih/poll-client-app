const defaultState = {
  error: null,
  polls: [],
};

const updatePollReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "PUT_POLL_STARTED":
      return {
        error: null,
        isLoading: true,
        polls: [],
      };
    case "PUT_POLL_SUCCESS":
      return {
        error: null,
        isLoading: false,
        polls: [
          state.polls.map((poll) =>
            poll.proverbsId === action.payload
              ? { ...poll, poll_completed: !action.poll_completed }
              : poll
          ),
        ],
        payload: [],
      };
    case "PUT_POLL_FAILED":
      return {
        isLoading: false,
        error: action.payload,
        polls: [],
      };
    default:
      return state;
  }
};

export default updatePollReducer;
