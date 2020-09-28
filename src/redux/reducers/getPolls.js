const defaultState = {
  isLoading: null,
  error: null,
  words: [],
};

const pollsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_POLLS_STARTED":
      return {
        error: null,
        isLoading: true,
        polls: [],
      };
    case "GET_POLLS_SUCCESS":
      return {
        error: null,
        isLoading: false,
        polls: action.payload,
      };
    case "GET_POLLS_FAILED":
      return {
        isLoading: false,
        error: action.payload,
        polls: [],
      };
    default:
      return state;
  }
};

export default pollsReducer;
