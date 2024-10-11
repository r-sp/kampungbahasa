import { createContext } from "react";

export const ThemeContext = createContext<"dark" | "light" | "system">("system");
export const AuthContext = createContext(null);
