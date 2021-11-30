import { useState } from "react";

export const useInput = (prop) => {
  const [value, setValue] = useState(prop);

  return {
    value,
    setValue,
    reset: () => setValue(""),
  };
};