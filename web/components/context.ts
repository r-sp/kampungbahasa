import { createContext } from "react";

export const ThemeContext = createContext<{
  theme: "dark" | "light" | "system";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light" | "system">>;
}>({
  theme: "system",
  setTheme: () => {},
});

export const AuthContext = createContext(null);
