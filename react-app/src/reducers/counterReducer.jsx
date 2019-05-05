const counterReducer = (
  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  },
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      const tempCounter = [...state.counter];
      const index = tempCounter.findIndex(x => x.id === action.payload);
      tempCounter[index].value++;
      state = { ...state, counter: tempCounter };
      break;

    case "DELETE":
      state = {
        ...state,
        counter: state.counter.filter(c => c.id !== action.payload)
      };
      break;

    default:
      break;
  }
  return state;
};

export default counterReducer;
