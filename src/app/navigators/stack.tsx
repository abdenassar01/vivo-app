/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../screens/onboarding/onboarding';
import Login from '../screens/auth/login/login';
import SignUp from '../screens/auth/signup/signup';
import ResetPassword from '../screens/auth/reset/reset-password';
import SignupSuccess from '../screens/auth/signup/success/signup-success';
import DrawerNavigation from './drawer';

const Stack = createStackNavigator();

export const OnboardingStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="OnBoardingg" component={Onboarding} />
  </Stack.Navigator>
);

export const UnAuthenticationStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="SignupSuccess" component={SignupSuccess} />
    </Stack.Navigator>
  );
};

export const AuthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      {/* <Stack.Screen name="Chat" component={Home} />
      <Stack.Screen name="Payment" component={Home} /> */}
    </Stack.Navigator>
  );
};
