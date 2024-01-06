import React, { useEffect, useState } from "react";
import {
  AuthenticatedStack,
  OnboardingStack,
  UnAuthenticationStacks,
  LoaderSack,
} from "./stack";
import { useOnBoardingStore } from "../../stores/onboarding";
import { getOnBoarding } from "../../stores/presisting-helpers/onboarding";
import { useLangStore } from "../../stores/lang";
import { UserAuth } from "../contexts/AuthContext";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { User } from "../../../types/user";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "react-native";

const Router = () => {
  const { onBoarding, setOnBoarding } = useOnBoardingStore();
  const { user, setUser } = UserAuth();
  const [loading, setLoading] = useState<boolean>(true);
  let isMounted = true;
  const { currentLang } = useLangStore();
  const { navigate, getState } = useNavigation<StackNavigationProp<any>>();

  const fetchCurrentUser = async (id: any) => {
    const docSnap = await firestore().collection("pompistes").doc(id).get();
    if (docSnap.exists) {
      const currentUser = docSnap.data();
      if (isMounted) setUser({ ...currentUser, id } as User);
    }
  };

  const onAuthStateChanged = async (_user: any) => {
    const currentUsr = auth().currentUser;

    console.log("onAuthStateChanged");
    if (!_user) {
      setLoading(false);
      return;
    }

    const isResiting = await AsyncStorage.getItem("isResiting");
    if (!isResiting) {
      await fetchCurrentUser(currentUsr?.uid);
      setLoading(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    getOnBoarding().then((value) => {
      if (value === `${true}`) {
        setOnBoarding(true);
      }
    });
  }, [onBoarding, currentLang]);

  console.log("user:", user);

  if (loading && !user) return <LoaderSack />;
  else if (!onBoarding) return <OnboardingStack />;
  else if (!user) return <UnAuthenticationStacks />;
  else if (user?.email && !user?.status)
    return <Text>Votre compte est en attente d'approbation !</Text>;
  else return <AuthenticatedStack />;
};

export default Router;
