"use client";

import { useEffect, useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type Props = {
  getValues: (data: Record<number, string>) => void;
  label: string;
  length?: number;
};

export const InputGroup = ({ label, getValues, length = 5 }: Props) => {
  const [values, setValues] = useState<Record<number, string>>({});

  useEffect(() => {
    getValues(values);
  }, [values]);

  const InputsList = useMemo(() => {
    return Array.from(Array(length)).map((item, index) => (
      <Input
        type="text"
        key={index}
        maxLength={1}
        id={index.toString()}
        value={values[index]?.toUpperCase() || ""}
        onChange={(event) => {
          const { id, value } = event.target;

          setValues((prev) => ({
            ...prev,
            [Number.parseInt(id)]: value.toUpperCase(),
          }));
        }}
      />
    ));
  }, [length, values]);

  return (
    <div className="flex flex-col items-center gap-4 w-64">
      <Label className="text-center">{label}</Label>

      <div className="flex flex-nowrap w-full gap-4 items-center">
        <>{InputsList}</>
      </div>
    </div>
  );
};
