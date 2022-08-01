// 참고 :https://kentcdodds.com/blog/how-to-use-react-context-effectively

import * as React from "react";

const TOGGLE = "toggle";

type Action = { type: typeof TOGGLE };
type Dispatch = (action: Action) => void;
type State = { theme: string };
type ThemeProviderProps = { children: React.ReactNode };

const ThemeStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function themeReducer(state: State, action: Action) {
  switch (action.type) {
    case "toggle": {
      return { theme: state.theme === "dark" ? "light" : "dark" };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [state, dispatch] = React.useReducer(themeReducer, { theme: "light" });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <ThemeStateContext.Provider value={value}>
      {children}
    </ThemeStateContext.Provider>
  );
}

function useTheme() {
  const context = React.useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
