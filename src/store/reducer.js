import { COUNTER_DECCREMENT, COUNTER_INCREMENT } from "../actionTypes";

export const reducer = (state = { count: 0 }, action) => {
  console.log(state, action);
  switch (action.type) {
    case COUNTER_INCREMENT: {
      state.count++;
      return { ...state };
    }
    case COUNTER_DECCREMENT: {
      state.count--;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
