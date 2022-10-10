import { UIState } from "./UIProvider";

type actionType = { type: "setMenuOpen" };

export const uiReducer = (state: UIState, action: actionType): UIState => {
  switch (action.type) {
    case "setMenuOpen":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };

    default:
      return state;
  }
};
