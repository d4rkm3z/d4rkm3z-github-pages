import { createAction } from "./utils";

export enum Action {
  SET_AVAILABLE_POSITIONS = "SET_AVAILABLE_POSITIONS",
  SET_INCORRECT_POSITIONS = "SET_INCORRECT_POSITIONS",
  SET_AVAILABLE_LETTERS = "SET_AVAILABLE_LETTERS",
  SET_UNAVAILABLE_LETTERS = "SET_UNAVAILABLE_LETTERS",
}

export const setAvailablePositionsAction = createAction<Record<number, string>>(
  Action.SET_AVAILABLE_POSITIONS,
);
export const setIncorrectPositionsAction = createAction<Record<number, string>>(
  Action.SET_INCORRECT_POSITIONS,
);
export const setAvailableLettersAction = createAction<string>(
  Action.SET_AVAILABLE_LETTERS,
);
export const setUnavailableLetters = createAction<string>(
  Action.SET_UNAVAILABLE_LETTERS,
);
