export default function experiments(state = [], action) {
  switch (action.type) {
    case "FETCH_EXPERIMENTS_SUCCESS": {
      return action.experiments;
    }
    case "CREATE_EXPERIMENT_SUCCESS": {
      return [...state, action.newExpt];
    }
    case "EDIT_EXPERIMENT_SUCCESS": {
      let newState = [...state];
      const indexOfEdited = newState.findIndex((expt) => (
        expt.id === action.editedExpt.id
      ));
      newState[indexOfEdited] = action.editedExpt;
      return newState;
    }
    default: {
      return state;
    }
  }
}
