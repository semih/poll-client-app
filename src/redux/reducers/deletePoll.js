const defaultState = {
  isLoading: null,
  error: null,
  polls: [],
};

const deletePollReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "DELETE_POLL_STARTED":
      return {
        error: null,
        isLoading: true,
        polls: [],
      };
    case "DELETE_POLL_SUCCESS":
      return {
        error: null,
        isLoading: false,
        polls: action.payload,
      };
    case "DELETE_POLL_FAILED":
      return {
        isLoading: false,
        error: action.payload,
        polls: [],
      };
    default:
      return state;
  }
};

export default deletePollReducer;
