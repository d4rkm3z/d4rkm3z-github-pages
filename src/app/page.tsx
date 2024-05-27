"use client";

import { ChangeEvent, useReducer, useState } from "react";
import { InputGroup } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  initialState,
  reducer,
  setAvailableLettersAction,
  setAvailablePositionsAction,
  setIncorrectPositionsAction,
  setUnavailableLetters,
} from "@/state";
import { Button } from "@/components/ui/button";
import { getWords } from "@/lib/search-words";
import { Title } from "@/components/ui/title";

const INPUT_SIZE = 5;

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [words, setWords] = useState<string[]>([]);

  const availablePositionsHandler = (data: Record<number, string>) => {
    dispatch(setAvailablePositionsAction(data));
  };

  const incorrectPositionsHandler = (data: Record<number, string>) => {
    dispatch(setIncorrectPositionsAction(data));
  };

  const availableLettersHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setAvailableLettersAction(event.target.value.toUpperCase()));
  };

  const unavailableLettersHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUnavailableLetters(event.target.value.toUpperCase()));
  };

  const clickHandler = () => {
    setWords(getWords(state));
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-16 p-24">
      <Title />

      <div className="flex flex-row gap-10 justify-center w-full min-[300px]:flex-wrap">
        <div className="border rounded-2xl flex flex-col flex-nowrap items-center gap-14 p-10 flex-2 self-start">
          <InputGroup
            length={INPUT_SIZE}
            label={"Известные позиции букв"}
            getValues={availablePositionsHandler}
          />
          <InputGroup
            length={INPUT_SIZE}
            label={"Известные буквы с неверной позицией"}
            getValues={incorrectPositionsHandler}
          />

          <div className="flex flex-nowrap flex-col items-center w-80 min-w-80 gap-4">
            <Label>Известные буквы</Label>

            <div className="flex w-full">
              <Input
                type="text"
                value={state.availableLetters}
                onChange={availableLettersHandler}
              />
            </div>
          </div>

          <div className="flex flex-nowrap flex-col items-center w-80 min-w-80 gap-4">
            <Label>Отсутствующие буквы в искомом слове</Label>
            <div className="flex w-full">
              <Input
                type="text"
                value={state.unavailableLetters}
                onChange={unavailableLettersHandler}
              />
            </div>
          </div>

          <div>
            <Button variant={"default"} className="w-60" onClick={clickHandler}>
              Запуск
            </Button>
          </div>
        </div>

        <div className="border rounded-2xl flex flex-col flex-nowrap items-center gap-14 p-10 w-60 scroll-auto">
          <div className="flex flex-col align-middle gap-y-3 text-center">
            {words.map((item) => (
              <Label key={item}>{item.toUpperCase()}</Label>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
