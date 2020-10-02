const defaultState = {
  isLoading: null,
  error: null,
  polls: [],
};

const addPollReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_POLL_STARTED":
      return {
        error: null,
        isLoading: true,
        polls: [],
      };
    case "ADD_POLL_SUCCESS":
      return {
        ...state,
        isLoading: false,
        polls: [
          ...state.polls,
          { add_poll_completed: false, poll_name: action.payload },
        ],
      };
    case "ADD_POLL_FAILED":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default addPollReducer;
