import React, { useEffect, useState } from "react";
import {
  AuthenticatedStack,
  OnboardingStack,
  UnAuthenticationStacks,
} from "./stack";
import { useOnBoardingStore } from "../../stores/onboarding";
import { getOnBoarding } from "../../stores/presisting-helpers/onboarding";
import ScreenLoader from "../components/common/loader/screen-loader";
import { useLangStore } from "../../stores/lang";
import { UserAuth } from "../contexts/AuthContext";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { User } from "../../../types/user";

const Router = () => {
  const { onBoarding, setOnBoarding } = useOnBoardingStore();
  const { user, setUser } = UserAuth();
  const [loading, setLoading] = useState<boolean>(true);
  let isMounted = true;
  const { currentLang } = useLangStore();

  const fetchCurrentUser = async (id: any) => {
    const docSnap = await firestore().collection("pompistes").doc(id).get();

    if (docSnap.exists) {
      const currentUser = docSnap.data();
      if (isMounted) setUser({ ...currentUser, id } as User);
    }
  };

  const onAuthStateChanged = async (_user: any) => {
    const currentUsr = auth().currentUser;

    if (!_user) {
      setLoading(false);
      return;
    }

    await fetchCurrentUser(currentUsr?.uid);
    setLoading(false);
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

  console.log(user);

  if (loading && !user) return <ScreenLoader />;
  else if (!onBoarding) return <OnboardingStack />;
  else if (!user) return <UnAuthenticationStacks />;
  else return <AuthenticatedStack />;
};

export default Router;
