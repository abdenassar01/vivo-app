/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Onboarding from '../screens/onboarding/onboarding';

const Stack = createStackNavigator();

export const OnboardingStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="OnBoarding" component={Onboarding} />
  </Stack.Navigator>
);

export const UnAuthenticationStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Home} />
      <Stack.Screen name="Signup" component={Home} />
      <Stack.Screen name="ForgotPassword" component={Home} />
    </Stack.Navigator>
  );
};

export const AuthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTab" component={Home} />
      <Stack.Screen name="Chat" component={Home} />
      <Stack.Screen name="Payment" component={Home} />
    </Stack.Navigator>
  );
};
