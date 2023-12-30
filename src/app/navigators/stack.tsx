import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/onboarding/onboarding";
import Login from "../screens/auth/login/login";
import SignUp from "../screens/auth/signup/signup";
import ResetPassword from "../screens/auth/reset/reset-password";
import SignupSuccess from "../screens/auth/signup/success/signup-success";
import Home from "../screens/home/home";
import Quiz from "../screens/quiz/quiz";
import Conversion from "../screens/conversion/conversion";
import Ratings from "../screens/ratings/ratings";
import Orders from "../screens/orders/orders";
import Profile from "../screens/profile/profile";
import QuizSuccess from "../screens/quiz-success/quiz-success";
import UpdatePassword from "../screens/update-password/update-password";
import QuizQuestion from "../screens/quiz-question/quiz-question";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/core/drawer/drawer-content";
import i18next from "i18next";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

const Stack = createStackNavigator();

export const OnboardingStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="OnBoardingg" component={Onboarding} />
  </Stack.Navigator>
);

export const UnAuthenticationStacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="SignupSuccess" component={SignupSuccess} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

export const AuthenticatedStack = () => {
  const { background } = useTheme();
  console.log("Auth stack");

  return (
    <>
      <StatusBar backgroundColor={background} />
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerPosition: i18next.language === "ar" ? "right" : "left",
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Quiz" component={Quiz} />
        <Drawer.Screen name="Conversion" component={Conversion} />
        <Drawer.Screen name="Ratings" component={Ratings} />
        <Drawer.Screen name="Orders" component={Orders} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="QuizSuccess" component={QuizSuccess} />
        <Drawer.Screen name="UpdatePassword" component={UpdatePassword} />
        <Drawer.Screen name="QuizQuestion" component={QuizQuestion} />
      </Drawer.Navigator>
    </>
  );
};
