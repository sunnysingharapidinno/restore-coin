import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react"

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (data: SignUpData) => Promise<void>
  signOut: () => Promise<void>
}

interface SignUpData {
  name: string
  email: string
  password: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing auth token on app start
    checkAuthToken()
  }, [])

  const checkAuthToken = async () => {
    try {
      // In a real app, check AsyncStorage for auth token
      // await AsyncStorage.getItem('authToken');
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      // In a real app, make API call to authenticate
      // const response = await api.signIn(email, password);
      // await AsyncStorage.setItem('authToken', response.token);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsAuthenticated(true)
    } catch (error) {
      throw new Error("Invalid credentials")
    }
  }

  const signUp = async (data: SignUpData) => {
    try {
      // In a real app, make API call to register
      // const response = await api.signUp(data);
      // await AsyncStorage.setItem('authToken', response.token);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsAuthenticated(true)
    } catch (error) {
      throw new Error("Registration failed")
    }
  }

  const signOut = async () => {
    try {
      // In a real app, clear auth token
      // await AsyncStorage.removeItem('authToken');

      setIsAuthenticated(false)
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const value = {
    isAuthenticated,
    isLoading,
    signIn,
    signUp,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
