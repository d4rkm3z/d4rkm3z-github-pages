import { WordsDictionary } from "@/constants/words-dictionary";

type InputData = {
  availablePositions: Record<number, string>;
  incorrectPositions: Record<number, string>;
  availableLetters: string;
  unavailableLetters: string;
};

type SearchInputData = {
  availablePositions: Record<number, string>;
  notAvailablePositions: Record<number, string>;
  availableLetters: string[];
  notAvailableLetters: string[];
};

function searchWord(data: SearchInputData) {
  const {
    availablePositions = {},
    notAvailablePositions = {},
    availableLetters = [],
    notAvailableLetters = [],
  } = data;

  const result = WordsDictionary.reduce<string[]>((acc, curr) => {
    const length = curr.length;

    for (let i = 0; i <= length; i++) {
      const letter = curr[i];

      const checkAvailablePositions =
        Boolean(availablePositions?.[i]) && letter !== availablePositions?.[i];

      const checkNotAvailablePositions =
        Boolean(notAvailablePositions?.[i]) &&
        letter === notAvailablePositions?.[i];

      if (checkAvailablePositions || checkNotAvailablePositions) {
        return acc;
      }
    }

    if (!availableLetters.every((char) => curr.includes(char))) return acc;
    if (notAvailableLetters.some((char) => curr.includes(char))) return acc;

    acc.push(curr);

    return acc;
  }, []);

  return result;
}

function prepareInput(data: InputData): SearchInputData {
  const {
    availablePositions,
    incorrectPositions,
    availableLetters,
    unavailableLetters,
  } = data;

  return {
    availablePositions,
    notAvailablePositions: incorrectPositions,
    availableLetters: availableLetters.split(""),
    notAvailableLetters: unavailableLetters.split(""),
  };
}

export const getWords = (data: InputData): string[] => {
  return searchWord(prepareInput(data));
};
