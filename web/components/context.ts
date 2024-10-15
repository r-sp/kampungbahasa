import React, { createContext } from "react";

export const ThemeContext = createContext<{
  theme: string | undefined;
  setTheme: React.Dispatch<React.SetStateAction<string | undefined>>;
}>({
  theme: undefined,
  setTheme: () => {},
});

export const AuthContext = createContext(null);
