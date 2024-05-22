import { Action } from "@/state/index";
import type { RootState } from "./type";

export const initialState: RootState = {
  availablePositions: {},
  incorrectPositions: {},
  availableLetters: "",
  unavailableLetters: "",
};

export const reducer = (state: RootState, action: any) => {
  switch (action.type) {
    case Action.SET_AVAILABLE_POSITIONS:
      return {
        ...state,
        availablePositions: action.payload,
      };
    case Action.SET_INCORRECT_POSITIONS:
      return {
        ...state,
        incorrectPositions: action.payload,
      };
    case Action.SET_AVAILABLE_LETTERS:
      return {
        ...state,
        availableLetters: action.payload,
      };
    case Action.SET_UNAVAILABLE_LETTERS:
      return {
        ...state,
        unavailableLetters: action.payload,
      };
  }

  return state;
};
