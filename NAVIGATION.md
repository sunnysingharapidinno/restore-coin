# React Native Navigation Setup

## Overview

This document describes the navigation architecture implemented in the React Native application using React Navigation v6 with TypeScript. The setup provides type-safe navigation, clear separation between authentication and app flows, and easy extensibility.

## Architecture

### Navigation Structure

```
RootNavigator
├── AuthNavigator (Stack)
│   ├── SignInScreen
│   └── SignUpScreen
└── AppNavigator (Stack)
    └── HomeScreen
```

### Key Components

1. **RootNavigator** - The main navigator that switches between Auth and App flows based on authentication state
2. **AuthNavigator** - Handles unauthenticated user flow (Sign In, Sign Up)
3. **AppNavigator** - Handles authenticated user flow (Home and future screens)

## Implementation Details

### 1. Type Definitions

All navigation types are defined in [`src/presentation/navigation/types.ts`](src/presentation/navigation/types.ts):

```typescript
// Auth Stack param list
export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

// App Stack param list
export type AppStackParamList = {
  Home: undefined;
  // Add more screens: Profile: { userId: string };
};

// Root Stack param list
export type RootStackParamList = {
  Splash: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  App: NavigatorScreenParams<AppStackParamList>;
};
```

### 2. Constants

Navigation constants are defined in [`src/presentation/navigation/constants.ts`](src/presentation/navigation/constants.ts):

```typescript
export const Routes = {
  // Root routes
  SPLASH: 'Splash',
  AUTH: 'Auth',
  APP: 'App',
  
  // Auth routes
  SIGN_IN: 'SignIn',
  SIGN_UP: 'SignUp',
  
  // App routes
  HOME: 'Home',
};
```

### 3. Authentication Context

The app uses an [`AuthContext`](src/state/contexts/AuthContext.tsx) to manage authentication state:

```typescript
const { isAuthenticated, signIn, signUp, signOut } = useAuth();
```

### 4. Root Navigator

The [`RootNavigator`](src/presentation/navigation/stacks/RootNavigator.tsx) handles:
- Splash screen display
- Authentication state checking
- Automatic navigation between Auth and App stacks

## Usage Examples

### 1. Navigation Between Screens

#### Navigate from Sign In to Sign Up
```typescript
// In SignInScreen.tsx
const handleSignUp = () => {
  navigation.navigate('SignUp');
};
```

#### Go back from Sign Up to Sign In
```typescript
// In SignUpScreen.tsx
const handleSignIn = () => {
  navigation.goBack();
};
```

### 2. Authentication Flow

#### Sign In
```typescript
// In SignInScreen.tsx
const { signIn } = useAuth();

const handleSignIn = async () => {
  try {
    await signIn(email, password);
    // Navigation happens automatically via RootNavigator
  } catch (error) {
    // Handle error
  }
};
```

#### Sign Out
```typescript
// In HomeScreen.tsx
const { signOut } = useAuth();

const handleLogout = () => {
  signOut();
  // Navigation happens automatically via RootNavigator
};
```

### 3. Type-Safe Navigation

All screens receive typed navigation props:

```typescript
import { SignInScreenProps } from '../../navigation/types';

export const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  // navigation is fully typed
};
```

## Extending the Navigation

### Adding a New Screen to App Stack

1. **Update type definitions** in `types.ts`:
```typescript
export type AppStackParamList = {
  Home: undefined;
  Profile: { userId: string }; // New screen with params
};
```

2. **Add route constant** in `constants.ts`:
```typescript
export const Routes = {
  // ...existing routes
  PROFILE: 'Profile',
};
```

3. **Add screen to navigator** in `AppNavigator.tsx`:
```typescript
<Stack.Screen
  name={Routes.PROFILE}
  component={ProfileScreen}
  options={{
    title: 'Profile',
  }}
/>
```

4. **Navigate to the new screen**:
```typescript
navigation.navigate('Profile', { userId: '123' });
```

### Adding a New Navigator

1. **Create new param list**:
```typescript
export type TabsParamList = {
  HomeTab: undefined;
  ProfileTab: undefined;
};
```

2. **Create the navigator**:
```typescript
const Tab = createBottomTabNavigator<TabsParamList>();

export const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeTab" component={HomeScreen} />
    <Tab.Screen name="ProfileTab" component={ProfileScreen} />
  </Tab.Navigator>
);
```

## Best Practices

### 1. Type Safety
- Always use typed navigation props
- Define all route parameters in the param lists
- Use the `Routes` constants to avoid typos

### 2. Navigation Structure
- Keep authentication flow separate from app flow
- Use nested navigators for complex navigation patterns
- Minimize deep nesting (max 3 levels recommended)

### 3. Screen Transitions
- Configure screen options for consistent animations
- Use platform-specific transitions when needed
- Keep transitions smooth and performant

### 4. State Management
- Let the auth context handle authentication state
- Don't manually navigate between Auth and App stacks
- Use navigation state for UI-only concerns

## Common Patterns

### 1. Protected Routes
Routes are automatically protected by the RootNavigator based on auth state:

```typescript
{isAuthenticated ? (
  <Stack.Screen name={Routes.APP} component={AppNavigator} />
) : (
  <Stack.Screen name={Routes.AUTH} component={AuthNavigator} />
)}
```

### 2. Deep Linking
To add deep linking support:

```typescript
const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Auth: {
        screens: {
          SignIn: 'signin',
          SignUp: 'signup',
        },
      },
      App: {
        screens: {
          Home: 'home',
        },
      },
    },
  },
};

<NavigationContainer linking={linking}>
  {/* navigators */}
</NavigationContainer>
```

### 3. Navigation Without Navigation Prop
Use the navigation ref for navigation outside of components:

```typescript
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: any, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
```

## Testing Navigation

### 1. Unit Testing Screens
```typescript
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

render(
  <NavigationContainer>
    <SignInScreen navigation={mockNavigation} />
  </NavigationContainer>
);
```

### 2. Integration Testing
Test complete navigation flows including auth state changes and screen transitions.

## Troubleshooting

### Common Issues

1. **TypeScript errors on navigation**
   - Ensure all screens are added to their respective param lists
   - Check that screen names match between types and navigators

2. **Navigation not working after auth**
   - Verify auth context is properly updating `isAuthenticated`
   - Check that RootNavigator is re-rendering on auth state change

3. **Deep linking issues**
   - Ensure linking configuration matches your navigation structure
   - Test with proper URL schemes

## Conclusion

This navigation setup provides a solid foundation for a production-ready React Native application with:
- Type-safe navigation
- Clear separation of concerns
- Easy extensibility
- Automatic auth flow handling
- Industry-standard patterns

For more information, refer to the [React Navigation documentation](https://reactnavigation.org/docs/getting-started).