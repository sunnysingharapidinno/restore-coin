import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from "react"
import { useColorScheme } from "react-native"
import { lightTheme, darkTheme, Theme } from "./index"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (isDark: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: "light" | "dark" | "system"
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = "system",
}) => {
  const systemColorScheme = useColorScheme()

  const getInitialTheme = () => {
    if (initialTheme === "system") {
      return systemColorScheme === "dark"
    }
    return initialTheme === "dark"
  }

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme())

  const value = useMemo(
    () => ({
      //   theme: isDarkMode ? darkTheme : lightTheme,
      theme: darkTheme,
      toggleTheme: () => setIsDarkMode((prev) => !prev),
      setTheme: (isDark: boolean) => setIsDarkMode(isDark),
    }),
    [isDarkMode]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
