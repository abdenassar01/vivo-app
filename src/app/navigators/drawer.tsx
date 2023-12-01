/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../components/core/drawer/drawer-content';
import Home from '../screens/home/home';
import Quiz from '../screens/quiz/quiz';
import Conversion from '../screens/conversion/conversion';
import Ratings from '../screens/ratings/ratings';
import Orders from '../screens/orders/orders';
import Profile from '../screens/profile/profile';
import QuizSuccess from '../screens/quiz-success/quiz-success';
import UpdatePassword from '../screens/update-password/update-password';
import QuizQuestion from '../screens/quiz-question/quiz-question';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
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
  );
};

export default DrawerNavigation;
