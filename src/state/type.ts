export type RootState = {
  availablePositions: Record<number, string>;
  incorrectPositions: Record<number, string>;
  availableLetters: string;
  unavailableLetters: string;
};
